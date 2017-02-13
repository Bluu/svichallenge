import { combineReducers } from 'redux';

import { authReducer } from './auth-reducer';
import { productsReducer } from './products-reducer';
import { cartReducer } from './cart-reducer';
import { helloWorldReducer } from './helloWorldReducer';

export default combineReducers({
    authReducer,
    productsReducer,
    cartReducer,
    helloWorldReducer
});;
