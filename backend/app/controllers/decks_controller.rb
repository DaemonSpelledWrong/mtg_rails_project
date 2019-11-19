class DecksController < ApplicationController
  skip_before_action :authenticate_request

  def index
    @decks = Deck.all

    render json: @decks, include: :standard_cards
  end

  def create
    @deck = Deck.create(
      name: params[:name],
      user_id: params[:user_id]
    )
    params[:cards].map do |card|
      Deckcard.create(
        deck_id: @deck.id,
        standard_card_id: card[:id]
      )
    end

    render status: 200
  end

  def update
    @deck = Deck.find(params[:id])

    @deck.update(
      name: params[:name]
    )

    @deck.deckcards.destroy_all

    params[:cards].map do |card|
      Deckcard.create(deck_id: @deck[:id], standard_card_id: card[:id])
    end

    render status: 200
  end

  def destroy
    @deck = Deck.find(params.id)

    @deck.destroy
  end
end
