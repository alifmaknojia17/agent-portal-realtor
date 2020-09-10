import axios from 'axios';
import { LOAD_LISTINGS, LOAD_IMAGES } from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// get all listings
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

// create new listing
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

// update existing listing
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

// delete existing listing
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

// load images for the current listing
export const loadListingImages = (listingId) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`images/${listingId}`);
    dispatch({
      type: LOAD_IMAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Error fetching images', 'danger'));
  }
};

// post images for listing
export const listingImages = (data, listingId) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const res = await axios.post(`images/${listingId}`, data, config);
    dispatch(setAlert('Images Uploaded', 'success'));
  } catch (err) {
    dispatch(setAlert('Cannot upload images something went wrong', 'danger'));
  }
};
