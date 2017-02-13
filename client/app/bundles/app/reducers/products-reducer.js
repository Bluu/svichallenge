import { GET_PRODUCTS } from '../constants/products-cons';

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                products: action.products
            };
        default:
            return state;
    }
}