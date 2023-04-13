require "jwt"
require "net/http"

module FirebaseAuth
  ISSUER_PREFIX = "https://securetoken.google.com/".freeze

  # IDプロバイダがJWTに署名するためのアルゴリズム
  ALGORITHM = "RS256".freeze

  # firebaseのプロジェクトIDは、 [aud](Audience)として使用される。
  # issuer url は "https://securetoken.google.com/<FIREBASE_PROJECT_ID>" になる。
  FIREBASE_PROJECT_ID = ENV["FIREBASE_PROJECT_ID"]

  # Google公開鍵証明書リストを読み込むためのURL。
  # 証明書のキーは、token headerから得たキーID。
  CERT_URI =
    "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com".freeze

  # 以下のverify_id_tokenメソッドのロジックは
  #   1. トークンをデコードして中身を取得する
  #   2. 取得したヘッダーを使って公開鍵を取得する
  #   3. 公開鍵を使ってtokenを検証する
  #   4. token検証に成功したら、ユーザーuidを返す。
  #   5. token検証に失敗したら、error情報を返す。
  #
  # Payload =>
  # {
  #   "name": "<username>",
  #   "picture": "<user_profile_picture>",
  #   "iss": "https://securetoken.google.com/<FIREBASE_PROJECT_ID>",
  #   "aud": "<firebase_project_id>",
  #   "auth_time": 1_668_430_866,
  #   "user_id": "<user_id>(same as sub)",
  #   "sub": "<subject>",
  #   "iat": 1_668_488_296,
  #   "exp": 1_668_491_896,
  #   "email": "<user email>",
  #   "email_verified": true,
  #   "firebase": {
  #     "identities": {
  #       "google.com": [
  #         "<google_user_id>"
  #       ],
  #       "email": [
  #         "<user_gmail>"
  #       ]
  #     },
  #     "sign_in_provider": "google.com"
  #   }
  # }
  def verify_id_token(id_token)
    # トークンをデコードして中身を取得する
    payload, header = decode_unverified(id_token) # decoded_tokenの結果を、payloadとheaderに分割代入している
    # 取得したヘッダーを使って公開鍵を取得する
    public_key = get_public_key(header)

    # 公開鍵を使ってtokenを検証する(2回目のデコード)
    errors = verify(id_token, public_key)

    # token検証に成功したら、ユーザーuidを返し、失敗したら、error情報を返す。
    if errors.empty?
      return { uid: payload["user_id"] }
    else
      return { errors: errors.join(" / ") }
    end
  end

  private

  # トークンをデコードして中身を取得するためのメソッド
  # ここでは検証を行わないので、`verify`の引数は`false`に設定する。
  # これにより、JWT.decodeは token データの抽出のみを行い、検証プロセスを飛ばすので、処理速度が速く、全体のパフォーマンスに影響がないはず。
  def decode_unverified(token)
    decode_token(
      token: token,
      key: nil,
      verify: false,
      options: {
        algorithm: ALGORITHM,
      },
    )
  end

  # ruby-jwtの使い方は右記"https://github.com/jwt/ruby-jwt"
  # 1回目のdecodeメソッドの引数の中身は以下のようになる
  # JWT.decode(token, key=nil, verify=false, option={algorithm: ALGORITHM})
  #
  # 返ってくるデータは以下のようになる
  # Array: decoded data of ID token =>
  # [
  #   {
  #     aud: "<firebase_project_id>",
  #     auth_time: 1_668_430_866,
  #     user_id: "<user_id>(same as sub)",
  #     sub: "<subject>",
  #     ...略
  #   }, # payload部分
  #   { alg: "RS256", kid: "XXXXXXX", typ: "JWT" } # header部分
  # ]
  def decode_token(token:, key:, verify:, options:)
    JWT.decode(token, key, verify, options)
  end

  # ヘッダー内のkeyID(kid)から公開鍵を取得する
  def get_public_key(header)
    certificate = find_certificate(header["kid"])
    public_key = OpenSSL::X509::Certificate.new(certificate).public_key
  rescue OpenSSL::X509::CertificateError => e
    raise "Invalid certificate. #{e.message}"

    return public_key
  end

  # https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com
  # 上記のGoogle公開鍵証明書リストにアクセスするとわかるが、
  # ここに載せている証明書は{key: value}のハッシュ形式で、ペアが二つあり、うち一つのkeyは今回のkidと一致する。
  # なので、keyがkidと一致する、対応する証明書を探す。
  # Googleから取得した証明書はこんな感じ:
  #   {
  #     "key_1": "CERTIFICATE_1",
  #     "key_2": "CERTIFICATE_2"
  #   }
  def find_certificate(kid)
    certificates = fetch_certificates 
    unless certificates.keys.include?(kid)
      raise "Invalid 'kid', do not correspond to one of valid public keys."
    end

    valid_certificate = certificates[kid]
    return valid_certificate
  end

  # CERT_URIから有効なgoogle公開鍵証明書リストを取得する。
  # 証明書を取得したら、JSONレスポンスを解析して、証明書を返します。
  def fetch_certificates
    uri = URI.parse(CERT_URI)
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true

    req = Net::HTTP::Get.new(uri.path)
    res = https.request(req)
    unless res.code == "200"
      raise "Error: can't obtain valid public key certificates from Google."
    end

    certificates = JSON.parse(res.body)
    return certificates
  end

  # 与えられたJWTトークンの署名とデータの有効性を検証する
  # トークンに何か問題がある場合は、エラーメッセージを返す。
  # 基本的にはJWT.decodeで自動検証
  def verify(token, key)
    errors = []

    begin
      decoded_token =
        decode_token(
          token: token,
          key: key,
          verify: true,
          options: decode_options,
        )
    rescue JWT::ExpiredSignature
      errors << "Firebase ID token has expired. Get a fresh token from your app and try again."
    rescue JWT::InvalidIatError
      errors << "Invalid ID token. 'Issued-at time' (iat) must be in the past."
    rescue JWT::InvalidIssuerError
      errors << "Invalid ID token. 'Issuer' (iss) Must be 'https://securetoken.google.com/<firebase_project_id>'."
    rescue JWT::InvalidAudError
      errors << "Invalid ID token. 'Audience' (aud) must be your Firebase project ID."
    rescue JWT::VerificationError => e
      errors << "Firebase ID token has invalid signature. #{e.message}"
    rescue JWT::DecodeError => e
      errors << "Invalid ID token. #{e.message}"
    end

    # subとalgはJWT.decodeで自動検証できないため、追加検証が必要
    sub = decoded_token[0]["sub"]
    alg = decoded_token[1]["alg"]

    # subはuidとなるユニークな値で、文字列で空でないことを検証
    unless sub.is_a?(String) && !sub.empty?
      errors << "Invalid ID token. 'Subject' (sub) must be a non-empty string."
    end

    # algはALGORITHM(RS256)と一致することを検証
    unless alg == ALGORITHM
      errors << "Invalid ID token. 'alg' must be '#{ALGORITHM}', but got #{alg}."
    end

    return errors
  end

  def decode_options
    {
      iss: ISSUER_PREFIX + FIREBASE_PROJECT_ID,
      aud: FIREBASE_PROJECT_ID,
      algorithm: ALGORITHM,
      verify_iat: true,
      verify_iss: true,
      verify_aud: true,
    }
  end
end