import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from '../reducers/reducers';

const configureStore = (railsProps = {}) => (
  createStore(Reducers, railsProps, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
  )
);

export default configureStore;
