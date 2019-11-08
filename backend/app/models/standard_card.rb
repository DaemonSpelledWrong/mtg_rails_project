class StandardCard < ApplicationRecord
  has_many :deckcards
  has_many :decks, through: :deckcards
end
