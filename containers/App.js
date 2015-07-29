import React, { Component } from 'react';
import DucksApp from './DucksApp';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducer from '../reducers/cart';
import * as getDucks from '../data/getData';
import {setDucks} from '../actions/CartAcions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  componentDidMount() {
    getDucks((data)=>{
      store.dispatch(setDucks(data.ducks));
    })
  }

  render() {
    return (
      <Provider store={store}>
        {() => <DucksApp />}
      </Provider>
    );
  }

}
