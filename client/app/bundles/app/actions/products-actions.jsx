import { GET_PRODUCTS } from '../constants/products-cons';

export const getProducts = (products = []) => {
    return {
        type: GET_PRODUCTS,
        products
    };
};

export const startGetProducts = () => {
    return (dispatch, getState) => {
        return $.get('/products', {}, (data) => {
            dispatch(getProducts(data));
        }, 'JSON');
    };
};