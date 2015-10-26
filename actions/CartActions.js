import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS} from '../constants/ActionTypes';
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

export function setDucks(ducks) {
  return {
    type: SET_DUCKS,
    payload: ducks
  }
}

export function getDucks() {
  return (dispatch) => {
    getDucksData((ducks)=>{
      dispatch(setDucks(ducks));
    })
  }
}
