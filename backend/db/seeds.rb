require 'rest-client'

page_num = 1

StandardCard.destroy_all

while page_num <= 8
  standard_card_url = "https://api.scryfall.com/cards/search?as=grid&order=name&page=#{page_num}&q=f%3Astandard&unique=cards"
  all_cards = JSON.parse(RestClient.get(standard_card_url).body)['data']
  all_cards.each do |card|
    StandardCard.create(
      name: card['name'],
      mana_cost: card['mana_cost'],
      image: card['image_uris']['small'],
      card_type: card['type_line'],
      cmc: card['cmc'],
      colors: card['colors'],
      set_name: card['set_name'],
      rarity: card['rarity']
    )
  end
  page_num += 1
end
