import axios from 'axios';
import { LOAD_LISTINGS, DELETE_LISTING } from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

export const loadListings = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/listings');
    dispatch({
      type: LOAD_LISTINGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Error loading listings', 'danger'));
  }
};

export const createListing = (data, history) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('listings/add-listing', data, config);

    dispatch({
      type: LOAD_LISTINGS,
      payload: res.data,
    });

    history.push('/listings');
  } catch (err) {
    dispatch(setAlert('Cannot create listing', 'danger'));
  }
};

export const updateListing = (data, listingId, history) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.patch(
      `/listings/update/${listingId}`,
      data,
      config
    );

    dispatch({
      type: LOAD_LISTINGS,
      payload: res.data,
    });
    history.push('/listings');
  } catch (err) {
    dispatch(setAlert('Cannot update listing', 'danger'));
  }
};

export const deleteListing = (listingId) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.delete(`/listings/delete/${listingId}`);
    dispatch(loadListings());
    dispatch(setAlert(res.data, 'success'));
  } catch (err) {
    dispatch(setAlert('Cannot delete listing at this time', 'danger'));
  }
};
