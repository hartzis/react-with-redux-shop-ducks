import React, { PropTypes } from 'react';

export default function Duck(props) {

  let {duck, inCart, addToCart} = props;
  let duckStyles = {
    'border': 'solid gray 2px',
    'textAlign': 'center',
    'margin': '3px',
    'padding': '3px',
 };
  return (
    <div className="duck" style={duckStyles}>
      <img src={duck.media.m} />
      <div>
        <button onClick={()=>addToCart(duck)} disabled={inCart}>
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
