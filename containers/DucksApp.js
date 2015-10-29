import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DucksToBuy from '../components/DucksToBuy';
import DuckCart from '../components/DuckCart';
import * as CartActions from '../actions/CartActions';

class DucksApp extends Component {

  componentDidMount() {
    this.props.getDucks(this.props.query);
  }

  render() {
    const { ducks, ducksInCart, addToCart, removeFromCart, loading } = this.props;
    return (
      <div className="appContainer">
        <h1 className="duckTitle">Shop ducks with redux!</h1>
        <h5 className="disclaimer">&#42; some ducks might not actually be ducks</h5>

        <hr/>
        <DuckCart ducksInCart={ducksInCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />

        <hr/>
        <DucksToBuy ducks={ducks}
          ducksInCart={ducksInCart}
          loading={loading}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ducks: state.cart.get('ducks').toJS(),
    ducksInCart: state.cart.get('ducksInCart').toJS(),
    loading: state.cart.get('loading'),
    query: state.cart.get('query'),
  }
}

export default connect(mapStateToProps, CartActions)(DucksApp);
