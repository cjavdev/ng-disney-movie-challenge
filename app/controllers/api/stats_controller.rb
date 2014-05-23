class Api::StatsController < ApplicationController
  def index
    render json: current_user.stats
  end
end
