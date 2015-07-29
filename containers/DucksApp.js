import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DucksToBuy from '../components/DucksToBuy';
import DuckCart from '../components/DuckCart';
import * as CartActions from '../actions/CartActions';

@connect(state => ({
  ducks: state.cart.get('ducks').toJS(),
  ducksInCart: state.cart.get('ducksInCart').toJS()
}))
export default class CounterApp extends Component {
  render() {
    const { ducks, ducksInCart, dispatch } = this.props;
    return (
      <div>
        <DuckCart ducksInCart={ducksInCart} {...bindActionCreators(CartActions, dispatch)} />
        <DucksToBuy ducks={ducks} {...bindActionCreators(CartActions, dispatch)} />
      </div>
    );
  }
}
