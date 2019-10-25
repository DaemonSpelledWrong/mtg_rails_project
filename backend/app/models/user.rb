class User < ApplicationRecord
  has_secure_password

  validates :email, uniqueness: true
  validates :email, presence: {message: 'Provide an email!'}
  validates :password_digest, presence: {message: "Passwords don't match!"}
end
