module Api
  class StatsController < ApiController
    def index
      render json: current_user.stats
    end
  end
end
