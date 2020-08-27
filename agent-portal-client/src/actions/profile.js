import axios from 'axios';
import {
  EDIT_PROFILE,
  PROFILE_ERROR,
  EDIT_PASSWORD_ERROR,
  UPLOAD_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './auth';
import { setAlert } from './alert';

export const editProfile = ({ fullName, email, phoneNumber }) => async (
  dispatch
) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ fullName, email, phoneNumber });

  try {
    const res = await axios.patch('/profile/edit', body, config);
    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const changePassword = ({ currentPassword, newPassword }) => async (
  dispatch
) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ currentPassword, newPassword });

  try {
    const res = await axios.patch('/profile/password', body, config);

    dispatch(setAlert(res.data, 'success'));

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: EDIT_PASSWORD_ERROR,
    });
  }
};

export const profilePic = (data) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(data);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const res = await axios.patch('/profile/image', data, config);

    dispatch(setAlert(res.data, 'success'));
  } catch (err) {
    dispatch({
      type: UPLOAD_ERROR,
    });
  }
};
