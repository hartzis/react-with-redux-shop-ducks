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
      <div className="appContainer">
        <h1 className="duckTitle">Shop ducks with redux!</h1>
        <h5 className="disclaimer">&#42; some ducks might not actually be ducks</h5>
        <DuckCart ducksInCart={ducksInCart} {...bindActionCreators(CartActions, dispatch)} />
        <DucksToBuy ducks={ducks} ducksInCart={ducksInCart} {...bindActionCreators(CartActions, dispatch)} />
      </div>
    );
  }
}
