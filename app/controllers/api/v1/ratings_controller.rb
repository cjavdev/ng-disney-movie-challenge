module Api
  class RatingsController < ApiController
    before_action :authenticate_user!
    wrap_parameters :movie_rating, include: [:rating, :movie_id]

    def index
      @ratings = Rating
        .includes(:movie, user: :authorizations)
        .order(created_at: :desc)
        .limit(200)
      render :index
    end

    def create
      @rating = current_user.ratings.new(rating_params)
      if @rating.save
        render json: @rating
      else
        render json: @rating.errors.full_messages
      end
    end

    def update
      @rating = current_user.ratings.find(params[:id])
      if @rating.update_attributes(rating_params)
        render json: @rating
      else
        render json: @rating.errors.full_messages
      end
    end

    private

    def rating_params
      params.require(:movie_rating).permit(:rating, :movie_id)
    end
  end
end

