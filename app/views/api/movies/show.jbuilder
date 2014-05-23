json.extract! @movie, :id, :name, :released_at, :avg_rating, :duration, :imdb_link, :rating_count
json.rating do
  json.id @rating.try(:id)
  json.movie_id @movie.id
  json.rating @rating.try(:rating)
end
