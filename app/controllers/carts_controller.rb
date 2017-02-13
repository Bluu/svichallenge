class CartsController < ApplicationController
    def index
        @cart = Cart.where(:uid => params[:uid])

        render json: @cart
    end

    def destroy
      @cart = Cart.find(params[:id])
      @cart.destroy
      head :no_content
    end

    def create
        @cart = Cart.new(cart_params)

        if @cart.save
        render json: @cart
        else
        render json: @cart.errors, status: :unprocessable_entity
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:uid, :product_id)
    end
end
