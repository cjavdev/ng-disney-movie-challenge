json.array! @leader_board do |user|
  json.id user.id
  json.name user.name
  json.image user.image
  json.created_at user.created_at
  json.rating_count user.rating_count
end
