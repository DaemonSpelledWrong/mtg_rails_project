class CreateStandardCards < ActiveRecord::Migration[6.0]
  def change
    create_table :standard_cards do |t|
      t.string :name
      t.string :mana_cost
      t.string :image
      t.string :type
      t.float :cmc
      t.string :colors
      t.string :set_name
      t.string :rarity
      t.timestamps
    end
  end
end
