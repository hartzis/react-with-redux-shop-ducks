import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DucksToBuy from '../components/DucksToBuy';
import DuckCart from '../components/DuckCart';
import ShopSearch from '../components/ShopSearch';
import * as CartActions from '../actions/CartActions';

class DucksApp extends Component {

  constructor(props, context) {
    super(props, context);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getDucks();
  }

  _onSubmit(e) {
    e && e.preventDefault && e.preventDefault();
    this.props.getDucks();
  }

  render() {
    const { ducks, ducksInCart, addToCart, removeFromCart, loading } = this.props;
    return (
      <div className="appContainer">
        <h1 className="duckTitle">Shop ducks with redux!</h1>
        <h5 className="disclaimer">&#42; some ducks might not actually be ducks</h5>
        <ShopSearch onSubmit={this._onSubmit}/>
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
  }
}

export default connect(mapStateToProps, CartActions)(DucksApp);
