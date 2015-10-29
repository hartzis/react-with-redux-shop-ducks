import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS, SET_LOADING} from '../constants/ActionTypes';
import {getDucks as getDucksData} from '../data/getData';

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

export function setLoading(value) {
  return {
    type: SET_LOADING,
    payload: value
  }
}

export function setDucks(ducks) {
  return {
    type: SET_DUCKS,
    payload: ducks
  }
}

export function getDucks(query) {
  return (dispatch) => {
    // loading cart
    dispatch(setLoading(true));
    // find cart items by query
    getDucksData((ducks)=>{
      dispatch(setDucks(ducks));
    }, {
      query
    })
  }
}
