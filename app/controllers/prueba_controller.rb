class PruebaController < ApplicationController

  def prueba
    user = User.find_by(user: "admin")
    render plain: "#{User.find_by(user: "admin")}"
  end
end
