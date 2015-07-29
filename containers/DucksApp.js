import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DucksToBuy from '../components/DucksToBuy';
import DuckCart from '../components/DuckCart';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
  ducks: state.get('ducks').toJS(),
  ducksInCart: state.get('ducksInCart').toJS()
}))
export default class CounterApp extends Component {
  render() {
    const { ducks, ducksInCart, dispatch } = this.props;
    return (
      <div>
        <DuckCart ducksInCart={ducksInCart} {...bindActionCreators(CounterActions, dispatch)} />
        <DucksToBuy ducks={ducks} {...bindActionCreators(CounterActions, dispatch)} />
      </div>
    );
  }
}
