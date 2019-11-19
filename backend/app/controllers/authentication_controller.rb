class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      user_data = User.find(command.result[:user][:id])
      user = UserSerializer.new(user_data)

      render json: { auth_token: command.result[:token], user: user, decks: DeckSerializer.new(user_data.decks)  }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
