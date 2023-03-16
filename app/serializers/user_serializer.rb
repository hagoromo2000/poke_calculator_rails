class UserSerializer
  include JSONAPI::Serializer
  attributes :uid

  has_many :posts
  has_many :likes
end
