import React from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../actions/CartActions';

function ShopSearch({query, onChange, onSubmit}) {
  
  return (
    <form onSubmit={onSubmit}>
      <div style={{display: 'inline-block'}}>
        <label>Shop Query:</label>
        <input type="text" placeholder="enter query here" value={query} onChange={(e)=>onChange(e.target.value)} />
      </div>
      <button type='submit' onClick={onSubmit}>Search Shop</button>
    </form>
  );
}

export default connect(({cart})=>({query: cart.get('query')}), {onChange: CartActions.setQuery})(ShopSearch);
