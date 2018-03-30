import * as Im from 'immutable';
import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS, SET_LOADING, SET_QUERY} from '../constants/ActionTypes';

const initialState = Im.fromJS({
  query: 'baby ducks',
  ducks: [],
  ducksInCart: [],
  loading: false,
});

export default function cart(state = initialState, {type, payload}) {
  switch (type) {
    case SET_DUCKS:
      return state.merge({
        'ducks': payload,
        'loading': false
      });
    case SET_QUERY:
      return state.set('query', payload);
    case SET_LOADING:
      return state.set('loading', payload);
    case ADD_TO_CART:
      return state.update('ducksInCart', ducksInCart=>ducksInCart.push(Im.fromJS(payload)));
    case REMOVE_FROM_CART:
      return state.update('ducksInCart', (ducksInCart)=>{
        return ducksInCart.filter(duck=>duck.get('link') !== payload.link);
      });
    default:
      return state;
  }
}
