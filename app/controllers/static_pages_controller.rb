class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def userFeedPage
    @data = { username: params[:username] }.to_json
    render 'userFeedPage'
  end
end