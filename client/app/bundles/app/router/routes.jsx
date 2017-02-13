import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LoginContainer from '../containers/user-auth-container';
import ProductsContainer from '../containers/products-container';
import HelloWorldContainer from '../containers/HelloWorldContainer';
import firebase from '../firebase/firebase';

const requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }

    next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/products');
    }

    next();
};

export default (
  <Router history={ hashHistory }>
    <Route path="/">
      <IndexRoute component={ LoginContainer } onEnter={ redirectIfLoggedIn }/>
      <Route path="products" component={ ProductsContainer } onEnter={ requireLogin }/>
      <Route path="hello" component={ HelloWorldContainer } onEnter={ requireLogin }/>
    </Route>
  </Router>
);