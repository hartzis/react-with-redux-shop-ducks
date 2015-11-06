import React, { Component } from 'react';

export default function DuckCart(props) {
  let {ducksInCart, removeFromCart} = props;
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
      <h3 className="cartTitle">Ducks in yer kart</h3>
      {$renderedDucksInCart}
    </div>
  )
}
