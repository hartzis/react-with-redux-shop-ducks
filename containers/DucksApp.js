import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DucksToBuy from '../components/DucksToBuy';
import DuckCart from '../components/DuckCart';
import * as CartActions from '../actions/CartActions';

class DucksApp extends Component {
  render() {
    const { ducks, ducksInCart, actions } = this.props;
    return (
      <div className="appContainer">
        <h1 className="duckTitle">Shop ducks with redux!</h1>
        <h5 className="disclaimer">&#42; some ducks might not actually be ducks</h5>
        <DuckCart ducksInCart={ducksInCart} {...actions} />
        <DucksToBuy ducks={ducks} ducksInCart={ducksInCart} {...actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ducks: state.cart.get('ducsk').toJS(),
    ducksInCart: state.cart.get('ducksInCart').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DucksApp)