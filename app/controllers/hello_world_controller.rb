class HelloWorldController < ApplicationController
  def index
    @initial_props = { 
      helloWorldReducer: "Stranger" 
      # rec: Product.all 
    }
  end

  def create
    # @sub_comment = Product.new params['product']
    # if @sub_comment.save
    #   render :json => { } # send back any data if necessary
    # else
    #   render :json => { }, :status => 500
    # end
  end

  # def create
  #   @record = Product.new(product_params)

  #   if @record.save
  #     render json: @record
  #   else
  #     render json: @record.errors, status: :unprocessable_entity
  #   end
  # end

  # private

  # def product_params
  #   params.require(:product).permit(:name, :brand, :model, :sku, :price, :desc)
  # end
end
