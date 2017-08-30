import React, { Component } from 'react';

import { addButtonStyles } from './Duck.js';

  let duckInCartStyle = {
    'padding': '3px',
    'borderLeft': '2px solid gray',
    'borderBottom': '2px solid gray',
  };

export default function DuckCart(props) {
  let {ducksInCart, removeFromCart} = props;
  let $renderedDucksInCart = ducksInCart.map((duck, idx)=>{
    return (
      <div style={duckInCartStyle} className="duckInCart" key={idx}>
        {duck.title || duck.date_taken}
        <button style={addButtonStyles} onClick={()=>removeFromCart(duck)}>
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
