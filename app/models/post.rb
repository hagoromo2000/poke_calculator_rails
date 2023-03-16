class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy

  validates :title, presence: true
  validates :pokemon, presence: true
  validates :tera_type, presence: true
  validates :move1, presence: true
  validates :ability, presence: true
  validates :nature, presence: true
  validates :ev_hp, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
  validates :ev_attack, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
  validates :ev_defense, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
  validates :ev_special_attack, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
  validates :ev_special_defense, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
  validates :ev_speed, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 252}
end
