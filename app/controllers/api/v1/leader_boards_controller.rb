module Api
  module V1
    class LeaderBoardsController < ApiController
      before_action :authenticate_user!

      def show
        @leader_board = User.with_most_ratings(10)
        render :show
      end
    end
  end
end
