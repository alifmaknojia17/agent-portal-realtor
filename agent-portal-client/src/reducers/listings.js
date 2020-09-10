import { LOAD_LISTINGS, DELETE_LISTING, LOAD_IMAGES } from '../actions/types';
const initialState = {
  allListings: [],
  images: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LISTINGS:
      return {
        ...state,
        allListings: payload,
      };
    case LOAD_IMAGES:
      return {
        ...state,
        images: state.images.concat(payload),
      };
    case DELETE_LISTING:
      return {
        ...state,
      };
    default:
      return state;
  }
}
