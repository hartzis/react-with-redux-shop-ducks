import React, { Component } from 'react';
import Duck from './Duck';

function _isInCart(duck, ducksInCart) {
  let foundDuck = ducksInCart.filter((duckInCart)=>{
    return duck.date_taken === duckInCart.date_taken && duck.title === duckInCart.title
  });
  return foundDuck.length > 0;
}

export default function DuckCart(props) {

  const {ducks, ducksInCart, addToCart, loading} = props;

  return (
    <div className="ducksContainer" style={{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center'}}>
      <span display-if={loading}>Ducks are loading...</span>
      <div display-if={!loading && ducks.length} style={{'display': 'flex', 'flexWrap': 'wrap'}}>
        {ducks.map((duck, idx)=>(<Duck key={idx} inCart={_isInCart(duck, ducksInCart)} duck={duck} addToCart={addToCart} />))}
      </div>
      <span display-if={!ducks.length}>Cart search term returned no items(ducks)...</span>
    </div>
  )
}
