import { ADD_CART_PRODUCTS, GET_CART_PRODUCTS } from '../constants/cart-cons';

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
         case ADD_CART_PRODUCTS:
            return {
                ...state,
                addedCartProduct: action.addedCartProduct
            };
        case GET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.cartProducts
            };
        default:
            return state;
    }
}