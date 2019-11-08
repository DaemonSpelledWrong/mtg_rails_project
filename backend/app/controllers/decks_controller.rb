class DecksController < ApplicationController
  skip_before_action :authenticate_request

  def index
    @decks = Deck.all

    render json: @decks, include: :user
  end

  def create
    @deck = Deck.create(
      name: params[:name],
      user_id: params[:user_id]
    )

    render status: 200
  end

  def update
    @deck = Deck.find(params[:id])

    @deck.update(
      name: params[:name]
    )

    render status: 200
  end

  def destroy
    @deck = Deck.find(params.id)

    @deck.destroy
  end
end
