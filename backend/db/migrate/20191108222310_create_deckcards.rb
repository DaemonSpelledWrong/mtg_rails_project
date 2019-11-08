class CreateDeckcards < ActiveRecord::Migration[6.0]
  def change
    create_table :deckcards do |t|
      t.references :deck, null: false, foreign_key: true
      t.references :standard_card, null: false, foreign_key: true
      t.timestamps
    end
  end
end
