# pokemon_calculator

### サービス概要

ポケットモンスターのプレイヤーに
情報共有と高速ダメージ計算による快適化を提供する
育成論投稿型ダメージ計算サービスです

### メインのターゲットユーザー

ポケモンバトル、主にランクマッチシングルバトルをメインにプレイしているユーザー

### ユーザーが抱える課題

ポケモンバトルは相手のポケモンの育成型を知っていることによるアドバンテージが大きいが、自ら型の情報を発信するメリットが少ないため、最新の型の情報を得ることが難しい。
また、一ターン 45 秒という制限時間の中、多くの項目を指定して正確にダメージ計算を行い、行動を決定することがシビア。

### 解決方法

育成型を投稿するフォーラムと、ダメージ計算ツールを結びつけることにより、型を投稿するインセンティブの創出と、高速なダメージ計算を共に実現する。

### 実装予定の機能（以下の例は実際のアプリの機能から一部省略しています）

- ゲストユーザー
  - ダメージ計算機能を使用できる
    - 攻撃側と防御側のポケモンの情報を入力し、ダメージを計算できる
      - それぞれ、投稿された育成論からデータを呼び出すことができる
      - 天候やフィールド、状態異常などの環境変化による計算結果の変化を算出することができる
  - 投稿された育成論を閲覧できる
  - ポケモンや技などの情報により、育成論を検索することができる
- ログインユーザー

  - ゲストユーザーの機能に加え、育成論を新たに投稿することができる
    - 投稿した育成論を編集できる
    - 投稿した育成論を削除できる
  - 育成論をブックマークできる

- 管理ユーザー
  - ユーザーの検索、一覧、詳細、編集
  - 育成論の検索、一覧、詳細、編集

### なぜこのサービスを作りたいのか？

自分がポケモン対戦をプレイする中で、素早くダメージ計算ができるツールや、最新のポケモンの方の情報を効率よく得られるツールがあれば、より快適に遊ぶことができると考えていたため。

### スケジュール

企画~技術調査:1/31 〆切
README〜ER 図作成:2/3 〆切
メイン機能実装:3/20 〆切
β 版を RUNTEQ 内リリース（MVP）：3/21 〆切
本番リリース：4 月初頭

### フロントエンドのリポジトリ

https://github.com/hagoromo2000/poke_calculator_react
