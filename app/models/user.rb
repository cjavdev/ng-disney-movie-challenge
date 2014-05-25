# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  name                   :string(255)
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable

  has_many :authorizations
  has_many :ratings, dependent: :destroy, inverse_of: :user
  has_many :movies, through: :ratings

  def self.with_most_ratings(n)
    select('users.*, COUNT(ratings.id) as rating_count')
      .joins(:ratings)
      .group('users.id')
      .order('COUNT(ratings.id) DESC')
      .limit(n)
  end

  def fb_auth
    @fb_auth ||= authorizations.where(provider: :Facebook).first
  end

  def name
    fb_auth.try(:name) || Faker::Name.name
  end

  def image
    fb_auth.try(:image) || ['http://i476.photobucket.com/albums/rr125/michela161270/Animated%20giff/1295271ykiafyirse.gif', 'http://i476.photobucket.com/albums/rr125/michela161270/Animated%20giff/13236301026p4969.gif'].sample
  end

  def rating_of(movie)
    @rating_of ||= {}
    @rating_of.fetch(movie.id, ratings.find_by_movie_id(movie.id))
  end

  def stats
    { rating_count: ratings.count, movie_count: Movie.count }
  end
end
