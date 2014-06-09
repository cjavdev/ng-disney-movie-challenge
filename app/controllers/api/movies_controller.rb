module Api
  class MoviesController < ApiController
    def index
      @movies = Movie.with_avg_rating.order(released_at: :asc)
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
end
