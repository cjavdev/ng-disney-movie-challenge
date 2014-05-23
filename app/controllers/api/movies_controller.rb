class Api::MoviesController < ApplicationController
  before_action :authenticate_user!

  def index
    @movies = Movie.with_avg_rating.order(released_at: :asc).limit(50)
    @ratings = {}
    current_user.ratings.map { |r| @ratings[r.movie_id] = r }
    render :index
  end

  def show
    @movie = Movie.with_avg_rating.find(params[:id])
    @rating = current_user.ratings.find_by_movie_id(params[:id])
    render :show
  end
end
