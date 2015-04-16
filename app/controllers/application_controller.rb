class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :session_authenticate, except: [:authenticate]


  private
  def session_authenticate

    if(@sessiones = Session.find_by(token: request.headers[:authtoken]))
      if(Time.now < @sessiones.expired )
        @sessiones.expired = @sessiones.expired + 1.minutes
        @sessiones.save
      else
        @sessiones.destroy
        render json: @fail, status: :unauthorized, retorno: false, authtoken: request.headers[:authtoken], time: Time.now
      end
    else
      render json: @fail, status: :unauthorized , retorno: false, authtoken: request.headers[:authtoken], time: Time.now
    end
  end

end
