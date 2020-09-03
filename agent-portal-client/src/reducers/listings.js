import { LOAD_LISTINGS } from '../actions/types';
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
    default:
      return state;
  }
}
