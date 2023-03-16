class PostSerializer
  include JSONAPI::Serializer
  attributes :title, :body, :pokemon, :tera_type, :move1, :move2, :move3, :move4, :ability, :item, :nature, :ev_hp, :ev_attack, :ev_defense, :ev_special_attack, :ev_special_defense, :ev_speed

  has_many :likes
  belongs_to :user
end
