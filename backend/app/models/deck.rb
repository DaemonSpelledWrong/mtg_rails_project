class Deck < ApplicationRecord
  belongs_to :user
  has_many :deckcards
  has_many :standard_cards, through: :deckcards
end
