import React, { Component } from 'react';

export default class DuckCart extends Component {

  render() {

    let {ducks} = this.props;
    let $renderedDucks = ducks.map((duck, idx)=>{
      return (<div key={idx}>duck{idx}</div>);
    });

    return (
      <div>
        {$renderedDucks}
      </div>
    )
  }
}
