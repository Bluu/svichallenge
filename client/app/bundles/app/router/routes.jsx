import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/main';
import LoginContainer from '../containers/user-auth-container';
import ProductsContainer from '../containers/products-container';
import CartContainer from '../containers/cart-container';
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
    <Route path="/" component={Main}>
      <IndexRoute component={ LoginContainer } onEnter={ redirectIfLoggedIn }/>
      <Route path="products" component={ ProductsContainer } onEnter={ requireLogin }/>
      <Route path="cart" component={ CartContainer } onEnter={ requireLogin }/>
    </Route>
  </Router>
);