class Api::MoviesController < ApplicationController
  before_action :authenticate_user!

  def index
    @movies = Movie.with_avg_rating.order(released_at: :asc)
    @ratings = {}
    current_user.ratings.map { |r| @ratings[r.movie_id] = r }
    render :index
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end
end
