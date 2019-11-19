class DeckSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :standard_cards
end
