import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

function ShopSearch(props) {
  const {fields: {query}, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: 'inline-block'}}>
        <label>Shop Query:</label>
        <input type="text" placeholder="enter query here" {...query}/>
      </div>
      <button onClick={handleSubmit}>Search Shop</button>
    </form>
  );
}

export default reduxForm({
  form: 'search',
  fields: ['query']
})(ShopSearch);
