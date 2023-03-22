class StaticPagesController < ApplicationController
  def home
  end

  def login
    render 'login'
  end
  
end
