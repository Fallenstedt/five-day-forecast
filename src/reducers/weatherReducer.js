import * as types from '../actions/actionTypes.js';

var initialState = {
  isFetching: false,
  data: null,
  city: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_WEATER:
      return { ...state, isFetching: true };
    case types.RECEIVE_WEATHER:
      return { ...state, isFetching: false, data: action.payload.list, city: action.payload.city.name };
    default:
    return state;
  }
}
