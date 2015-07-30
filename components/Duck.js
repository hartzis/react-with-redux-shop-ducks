import React, { Component, PropTypes } from 'react';

export default class Duck extends Component {

  static propTypes = {
    duck: PropTypes.shape({
      date_taken: PropTypes.string,
      media: PropTypes.shape({
        m: PropTypes.string
      }),
      title: PropTypes.string
    }),
    addToCart: PropTypes.func,
    inCart: PropTypes.bool
  }

  render() {
    let {duck, inCart, addToCart} = this.props;
    return (
      <div className="duck" style={{'border': 'solid gray 2px', 'textAlign': 'center'}}>
        <img src={duck.media.m} />
        <button onClick={()=>addToCart(duck)} disabled={inCart} style={{'display': 'block'}}>
          Add to Cart &#162;
        </button>
      </div>
    )
  }
}
