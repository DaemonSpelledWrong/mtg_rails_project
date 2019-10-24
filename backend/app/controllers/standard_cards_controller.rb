class StandardCardsController < ApplicationController
  skip_before_action :authenticate_request
  def index
    @cards = StandardCard.all

    render json: @cards
  end
end
