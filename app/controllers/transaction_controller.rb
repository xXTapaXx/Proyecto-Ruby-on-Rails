class TransactionController < ApplicationController

  def index
    @transaction = Transaction.all
  end

  def create
    @transaction = Transaction.new(transaction_params)

    respond_to do |format|
      if @transaction.save
      #if @fails
        format.html { redirect_to @transaction, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @transaction }


      else
        format.html { render :new }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def transaction_params
    params.require(:transaction).permit(:product_req_id, :product_offered_id)
  end
end
