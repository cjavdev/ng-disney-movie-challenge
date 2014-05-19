class StaticPagesController < ApplicationController
  skip_before_filter :authenticate_user!
  before_action :check_auth!

  def root
  end

  def check_auth!
    redirect_to '/welcome' unless user_signed_in?
  end
end
