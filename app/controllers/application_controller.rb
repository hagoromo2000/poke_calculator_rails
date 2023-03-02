class ApplicationController < ActionController::API
  include FirebaseAuth
  include Api::ExceptionHandler
  include ActionController::HttpAuthentication::Token::ControllerMethods
  
  before_action :authenticate_token

  def authenticate_token
    authenticate_with_http_token do |token, _options|
      result = verify_id_token(token)

      if result[:errors]
        render_400(nil, result[:errors])
      else
        # 条件に合うユーザーを検索し@_current_userに代入、いなければUserを作成した上で代入
        @_current_user = User.find_or_create_by!(uid: result[:uid])
      end
    end
  end

  def current_user
    @_current_user
  end
end