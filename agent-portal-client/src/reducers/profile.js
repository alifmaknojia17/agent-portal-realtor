import {
  EDIT_PROFILE,
  PROFILE_ERROR,
  EDIT_PASSWORD_ERROR,
} from '../actions/types';
const initialState = {
  agent: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_PROFILE:
      return {
        ...state,
        agent: payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        ...payload,
      };
    case EDIT_PASSWORD_ERROR:
      return 'Password change error';
    default:
      return state;
  }
}
