import React, { Component } from 'react';

export default class DuckCart extends Component {
  render() {
    let {ducksInCart, removeFromCart} = this.props;
    let $renderedDucksInCart = ducksInCart.map((duck, idx)=>{
      return (
        <div className="duckInCart" key={idx}>
          {duck.date_taken}-{duck.title}
          <button onClick={()=>removeFromCart(duck)}>
            Remove &#164;
          </button>
        </div>
      );
    })
    return (
      <div className="cartContainer">
        <h3 className="cartTitle">&#162;&nbsp;Ducks in yer kart&nbsp;&#162;</h3>
        {$renderedDucksInCart}
      </div>
    )
  }
}
