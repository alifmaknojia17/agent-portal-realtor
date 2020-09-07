import { LOAD_LISTINGS, DELETE_LISTING } from '../actions/types';
const initialState = {
  allListings: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LISTINGS:
      return {
        ...state,
        allListings: payload,
      };
    case DELETE_LISTING:
      return {
        ...state,
      };
    default:
      return state;
  }
}
