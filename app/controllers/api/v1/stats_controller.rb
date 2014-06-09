module Api
  module V1
    class StatsController < ApiController
      before_action :authenticate_user!

      def index
        render json: current_user.stats
      end

      def show
        redirect_to 'api/stats' unless current_user.id == 1

        render json: {
          user_count: User.count,
          rating_count: Rating.count
        }
      end
    end
  end
end
