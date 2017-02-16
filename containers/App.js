import React, { Component } from 'react';
import DucksApp from './DucksApp';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import cartReducer from '../reducers/cart';

const reducers = {
  form: formReducer,
  cart: cartReducer,
};
console.dir(reducers);
const reducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <DucksApp />
      </Provider>
    );
  }

}
