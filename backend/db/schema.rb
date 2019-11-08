# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_08_222310) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "deckcards", force: :cascade do |t|
    t.bigint "deck_id", null: false
    t.bigint "standard_card_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["deck_id"], name: "index_deckcards_on_deck_id"
    t.index ["standard_card_id"], name: "index_deckcards_on_standard_card_id"
  end

  create_table "decks", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_decks_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "standard_cards", force: :cascade do |t|
    t.string "name"
    t.string "mana_cost"
    t.string "image"
    t.string "card_type"
    t.float "cmc"
    t.string "colors"
    t.string "set_name"
    t.string "rarity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "deckcards", "decks"
  add_foreign_key "deckcards", "standard_cards"
  add_foreign_key "decks", "users"
end
