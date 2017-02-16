import * as Im from 'immutable';
import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS, SET_LOADING} from '../constants/ActionTypes';

const initialState = Im.fromJS({
  ducks: [],
  ducksInCart: [],
  loading: false,
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_DUCKS:
      return state.merge({
        'ducks': action.payload,
        'loading': false
      });
    case SET_LOADING:
      return state.set('loading', action.payload);
    case ADD_TO_CART:
      return state.update('ducksInCart', ducksInCart=>ducksInCart.push(Im.fromJS(action.payload)));
    case REMOVE_FROM_CART:
      return state.update('ducksInCart', (ducksInCart)=>{
        return ducksInCart.filter(duck=>duck.get('link') !== action.payload.link);
      });
    default:
      return state;
  }
}
