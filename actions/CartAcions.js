import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/ActionTypes.js';

export function addToCart(duckId) {
  return {
    type: ADD_TO_CART,
    payload: duckId
  }
}

export function removeFromCart(duckId) {
  return {
    type: REMOVE_FROM_CART,
    payload: duckId
  }
}
