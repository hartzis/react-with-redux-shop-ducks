import React from 'react';
import PropTypes from 'prop-types';

export const addButtonStyles = {
   'margin': '5px',
   'padding': '5px',
   'backgroundColor': 'lightgray',
   'border': '2px solid gray',
   'cursor': 'pointer',
 };

export default function Duck(props) {

  let {duck, inCart, addToCart} = props;
  let duckStyles = {
    'border': 'solid gray 2px',
    'textAlign': 'center',
    'margin': '3px',
    'padding': '3px',
 };
  let duckTitleStyle = {
    'maxWidth': '240px',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
  };
  return (
    <div className="duck" style={duckStyles}>
      <img src={duck.media.m} />
      <div>
        <div style={duckTitleStyle}>{duck.title || duck.date_taken}</div>
        <button style={addButtonStyles} onClick={()=>addToCart(duck)} disabled={inCart}>
          {inCart ? 'In Cart' : (<span>Add to Cart &#162;</span>)}
        </button>
      </div>
    </div>
  )
}

Duck.propTypes = {
  duck: PropTypes.shape({
    date_taken: PropTypes.string,
    media: PropTypes.shape({
      m: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
  addToCart: PropTypes.func,
  inCart: PropTypes.bool,
}
