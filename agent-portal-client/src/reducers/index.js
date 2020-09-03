import { combineReducers } from 'redux';
import alert from '../reducers/alert';
import auth from '../reducers/auth';
import profile from '../reducers/profile';
import allListings from '../reducers/listings';

export default combineReducers({
  alert,
  auth,
  profile,
  allListings,
});
