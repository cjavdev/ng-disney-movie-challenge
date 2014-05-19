class Api::RatingsController < ApplicationController
  def index
    @ratings = current_user.ratings
    render json: @ratings
  end
end
