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
end
