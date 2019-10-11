class RegistrationController < ApplicationController
  skip_before_action :authenticate_request

  def create
    salt = 'q34tf234'
    encrypted_password = ''

    if params[:password] != params[:password_confirmation]
      render 'invalid credentials'
    else
      encrypted_password = BCrypt::Password.create(params[:password] + salt)
    end

    @user = User.create(
      email: params[:email],
      password_digest: encrypted_password
    )
  end
end
