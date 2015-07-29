import * as Im from 'immutable';
import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS} from '../constants/ActionTypes.js';

const initialState = Im.fromJS({ ducks: [], ducksInCart: [] });

export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_DUCKS:
      return state.set('ducks', action.payload);
    case ADD_TO_CART:
      return state.update('ducksInCart', ducksInCart=>ducksInCart.push(action.payload));
    case REMOVE_FROM_CART:
      return state.update('ducksInCart', ducksInCart=>ducksInCart.filter(duckId=>duckId !== action.payload));
    default:
      return state;
  }
}
