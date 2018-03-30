import {ADD_TO_CART, REMOVE_FROM_CART, SET_DUCKS, SET_LOADING, SET_QUERY} from '../constants/ActionTypes';
import {getDucks as getDucksData} from '../data/getData';

function createAction(type) {
  return (payload) => ({ type, payload });
}

export const setQuery = createAction(SET_QUERY);

export const addToCart = createAction(ADD_TO_CART);

export const removeFromCart = createAction(REMOVE_FROM_CART);

export const setLoading = createAction(SET_LOADING);

export const setDucks = createAction(SET_DUCKS);

export function getDucks(query) {
  return (dispatch, getState) => {
    const q = query || getState().cart.get('query');
    // loading cart
    dispatch(setLoading(true));
    // find cart items by query
    getDucksData({ query: q }, (ducks)=>{
      dispatch(setDucks(ducks));
    })
  }
}
