# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

movies = CSV.parse(File.read('db/disney_movie_list.csv'))
movies.each do |(name, year, duration, rating, _)|
  puts "Creating: #{ name } from #{ year } lasts #{ duration } mins. and is rated #{ rating }"
  year += '-01-01' if year.length == 4
  next if Movie.exists?(name: name)

  Movie.create!(
    name: name,
    released_at: Date.parse(year),
    duration: duration
  )
end
