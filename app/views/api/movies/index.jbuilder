json.array! @movies do |movie|
  json.name movie.name
  json.id movie.id
  json.released_at movie.released_at
  json.imdb_link movie.imdb_link
  json.duration  movie.duration
  json.avg_rating movie.avg_rating
  json.rating do |rating|
    json.id @ratings[movie.id].try(:id)
    json.movie_id movie.id
    json.rating @ratings[movie.id].try(:rating)
  end
end
