module Api
  module V1
    class MoviesController < ApiController
      def index
        @movies = Movie.with_avg_rating.order(released_at: :asc)
        render json: @movies
      end

      def show
        @movie = Movie.with_avg_rating.find(params[:id])
        render json: @movie
      end
    end
  end
end
