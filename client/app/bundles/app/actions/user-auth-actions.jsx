import { LOGIN, LOGOUT } from '../constants/user-auth-cons';

import firebase, { githubProvider } from '../firebase/firebase';

export const login = (uid) => {
    return {
        type: LOGIN,
        uid
    };
};

export const startLogin = () => {
    return (dispatch, getState) => {
        return firebase
                .auth()
                .signInWithPopup(githubProvider)
                .then((result) => {
                    console.log('Auth worked', result);
                }).catch((error) => {
                    console.log('Unable to auth', error);
                });
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const startLogout = () => {
    return (dispatch, getState) => {
        return firebase
                .auth()
                .signOut()
                .then(() => {
                    console.log('Logged out');
                });
    };
};