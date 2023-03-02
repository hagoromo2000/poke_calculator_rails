# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create!(
  user_id: 1,
  title: "テスト",
  body: "テストです",
  pokemon: "ピカチュウ",
  tera_type: "でんき",
  move1: "かみなり",
  move2: "エレキボール",
  move3: "アイアンテール",
  move4: "ボルテッカー",
  ability: "せいでんき",
  item: "でんきだま",
  nature: "いじっぱり",
  ev_hp: 4,
  ev_attack: 252,
  ev_defense: 0,
  ev_special_attack: 0,
  ev_special_defense: 0,
  ev_speed: 252
)