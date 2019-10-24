class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :standard_cards, :type, :card_type
  end
end
