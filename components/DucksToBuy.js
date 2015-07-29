import React, { Component } from 'react';
import Duck from './Duck';

export default class DuckCart extends Component {

  render() {

    const {ducks, addToCart} = this.props;
    let $renderedDucks = ducks.map((duck, idx)=>{
      return (<Duck key={idx} duck={duck} addToCart={addToCart} />);
    });

    return (
      <div className="ducksContainer">
        {$renderedDucks}
      </div>
    )
  }
}
