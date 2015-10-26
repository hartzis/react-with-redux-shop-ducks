import * as Im from 'immutable';
import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS} from '../constants/ActionTypes';

const initialState = Im.fromJS({
  ducks: [],
  ducksInCart: [],
  loading: true,
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case SET_DUCKS:
      return state.merge({
        'ducks': action.payload,
        'loading': false
      });
    case ADD_TO_CART:
      return state.update('ducksInCart', ducksInCart=>ducksInCart.push(action.payload));
    case REMOVE_FROM_CART:
      return state.update('ducksInCart', (ducksInCart)=>{
        return ducksInCart.filter((duck)=>{
          return duck.date_taken !== action.payload.date_taken && duck.title !== action.payload.title
        })
      });
    default:
      return state;
  }
}
