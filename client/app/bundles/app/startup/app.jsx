import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import firebase from '../firebase/firebase';
import { login, logout } from '../actions/user-auth-actions';
import configureStore from '../store/store';
import Router from '../router/routes';

let dispatch;

function authCheck () {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(login(user.uid));
      hashHistory.push('/products');
    } else {
      dispatch(logout());
      hashHistory.push('/');
    }
  });
}

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const App = (props, _railsContext) => { 
  const store = configureStore(props);
  dispatch = store.dispatch;
  authCheck();

  return (
    <Provider store={ store }>
        { Router }
    </Provider>
  );
}

export default App;
