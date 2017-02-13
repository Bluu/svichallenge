import { combineReducers } from 'redux';

import { authReducer } from './auth-reducer';
import { productsReducer } from './products-reducer';
import { helloWorldReducer } from './helloWorldReducer';

export default combineReducers({
    authReducer,
    productsReducer,
    helloWorldReducer 
});;
