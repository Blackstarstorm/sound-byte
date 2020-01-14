class User < ApplicationRecord
  has_many :musics
  has_many :comments
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 4 }
end
