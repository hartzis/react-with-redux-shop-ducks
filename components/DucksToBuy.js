import React, { Component } from 'react';
import Duck from './Duck';

export default class DuckCart extends Component {

  _isInCart(duck, ducksInCart) {
    let foundDuck = ducksInCart.filter((duckInCart)=>{
      return duck.date_taken === duckInCart.date_taken && duck.title === duckInCart.title
    });
    return foundDuck.length > 0;
  }

  render() {

    const {ducks, ducksInCart, addToCart, loading} = this.props;
    let $renderedDucks = null;
    if (ducks.length) {
      $renderedDucks = ducks.map((duck, idx)=>{
        return (<Duck key={idx} inCart={this._isInCart(duck, ducksInCart)} duck={duck} addToCart={addToCart} />);
      });
    } else {
      $renderedDucks = (<span>Cart search term returned no items(ducks)...</span>);
    }

    return (
      <div className="ducksContainer" style={{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center'}}>
        {loading ? (<span>Ducks are loading...</span>) : $renderedDucks}
      </div>
    )
  }
}
