class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title,              null: false
      t.text :body
      t.string :pokemon,            null: false
      t.string :tera_type,          null: false
      t.string :move1,              null: false
      t.string :move2
      t.string :move3
      t.string :move4
      t.string :ability,            null: false
      t.string :item
      t.string :nature,             null: false
      t.integer :ev_hp,             null: false, default: 0
      t.integer :ev_attack,         null: false, default: 0
      t.integer :ev_defense,        null: false, default: 0
      t.integer :ev_special_attack, null: false, default: 0
      t.integer :ev_special_defense,null: false, default: 0
      t.integer :ev_speed,          null: false, default: 0

      t.timestamps
    end
  end
end
