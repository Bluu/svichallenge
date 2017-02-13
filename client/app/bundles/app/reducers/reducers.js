import { combineReducers } from 'redux';

import { authReducer } from './auth-reducer';
import { productsReducer } from './products-reducer';
import { cartReducer } from './cart-reducer';

export default combineReducers({
    authReducer,
    productsReducer,
    cartReducer
});;
