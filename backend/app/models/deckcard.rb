class Deckcard < ApplicationRecord
  belongs_to :deck
  belongs_to :standard_card
end
