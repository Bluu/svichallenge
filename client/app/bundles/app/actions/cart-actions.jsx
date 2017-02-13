import { ADD_CART_PRODUCTS, GET_CART_PRODUCTS } from '../constants/cart-cons';

export const addCartProducts = (addedCartProduct = {}) => {
    return {
        type: ADD_CART_PRODUCTS,
        addedCartProduct
    };
};

export const startAddCartProducts = (product_id) => {
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;

        var cart = {
            uid,
            product_id
        };

        return $.post('/carts', { cart }, (data) => {
            dispatch(addCartProducts(data));
        }, 'JSON');
    };
};

export const getCartProducts = (cartProducts = []) => {
    return {
        type: GET_CART_PRODUCTS,
        cartProducts
    };
};

export const startGetCartProducts = () => {
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;

        return $.get('/carts', { uid }, (data) => {
            dispatch(getCartProducts(data));
        }, 'JSON');
    };
};

export const startDeleteCartProducts = (id) => {
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;

        return $.ajax({
            url: `/carts/${id}`,
            type: 'DELETE',
            success: function(data) {
                dispatch(startGetCartProducts());
            }
        });
    };
};