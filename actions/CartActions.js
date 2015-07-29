import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS} from '../constants/ActionTypes';

export function addToCart(duck) {
  let {date_taken, title} = duck;
  return {
    type: ADD_TO_CART,
    payload: { date_taken, title }
  }
}

export function removeFromCart(duck) {
  return {
    type: REMOVE_FROM_CART,
    payload: duck
  }
}

export function setDucks(ducks) {
  return {
    type: SET_DUCKS,
    payload: ducks
  }
}
