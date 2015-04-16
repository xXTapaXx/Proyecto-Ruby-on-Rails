class UsersController < ApplicationController

  def logout
    @session = Session.find_by(token: request.headers[:authtoken])

    if @session
      @session.destroy
      render json: @session, status: :ok
    else
      render json: @session, status: :unprocessable_entity
    end
  end
  def auth
    session = Session.find_by(token: request.headers[:authtoken])

    if session
      render json: {retorno: true, data: session}
    else
      render json: {retorno: false}
    end
  end
  def authenticate
    begin
    password = Digest::MD5.hexdigest(params[:user][:password])
    user = User.find_by(user: params[:user][:user])
    #render plain: "#{user}"
    if user

      if  user.password == password
        @sesiones = Session.new
        @sesiones.userName = user.user
        @sesiones.token = Digest::MD5.hexdigest("tapa #{user.id} #{user.password} #{Time.now}")
        @sesiones.date_login = DateTime.now
        @sesiones.expired = DateTime.now + 1.minutes
        @sesiones.save


        render json: @sesiones, retorno: true, status: :created, data: @sesiones
      else
        render json: @sesiones, retorno: false, status: :unprocessable_entity
      end
    else
       render json: @sesiones, retorno: false, status: :unprocessable_entity
      #render json: {retorno: false, status: 422}
    end
    end
  rescue
    end
end
