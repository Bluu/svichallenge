import { LOGIN, LOGOUT } from '../constants/user-log-cons';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                uid: action.uid
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
}