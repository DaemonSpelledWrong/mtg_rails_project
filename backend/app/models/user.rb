class User < ApplicationRecord
  has_secure_password
  has_many :decks

  validates :email, uniqueness: true
  validates :email, presence: { message: 'Provide an email!' }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, presence: { message: "Passwords don't match!" }
end
