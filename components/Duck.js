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
    addToCart: PropTypes.func
  }

  render() {
    let {duck, addToCart} = this.props;
    return (
      <div className="duck">
        <img src={duck.media.m} />
      <button onClick={()=>addToCart(duck)}>
          Add to Cart &#162;
        </button>
      </div>
    )
  }
}
