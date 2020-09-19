import { LOAD_LISTINGS, DELETE_LISTING, LOAD_IMAGES } from '../actions/types';
const initialState = {
  allListings: [],
  images: [],
};

let newImages = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LISTINGS:
      return {
        ...state,
        allListings: payload,
      };
    case LOAD_IMAGES:
      newImages = newImages.concat(payload);
      state.images = Array.from(
        new Set(
          newImages.map((image) => {
            return image._id;
          })
        )
      ).map((id) => {
        return newImages.find((image) => {
          return image._id === id;
        });
      });
      return {
        ...state,
        ...state.images,
      };
    case DELETE_LISTING:
      return {
        ...state,
      };
    default:
      return state;
  }
}
