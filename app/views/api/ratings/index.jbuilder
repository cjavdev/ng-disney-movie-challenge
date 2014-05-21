json.array! @ratings do |rating|
  json.id rating.id
  json.rating rating.rating
  json.user_id rating.user_id
  json.movie_id rating.movie_id
  json.movie_name rating.movie.try(:name)
  json.user do
    json.id rating.user.id
    json.name rating.user.name
    json.image rating.user.image
  end
end
