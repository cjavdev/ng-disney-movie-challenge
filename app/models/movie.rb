# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  released_at :datetime
#  duration    :integer
#  imdb_link   :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Movie < ActiveRecord::Base
  validates :name, :released_at, :duration, presence: true
  default_scope { order(released_at: :asc) }

  has_many :ratings

  def self.with_avg_rating
    select('movies.*, AVG(ratings.rating) as avg_rating')
      .joins('LEFT OUTER JOIN ratings ON ratings.movie_id = movies.id')
      .group('movies.id')
  end
end
