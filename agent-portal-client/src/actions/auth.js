import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AGENT_LOADED,
  AUTH_ERROR,
} from './types';

//load agent
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/profile');
    dispatch({
      type: AGENT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register agent
export const register = ({ fullName, email, password, phoneNumber }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ fullName, email, password, phoneNumber });

  try {
    const res = await axios.post('/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data;
    dispatch(setAlert(error.msg, 'danger'));
  }
};

//google login
export const googleLogin = ({ tokenId, agentAvatar }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    tokenId,
    agentAvatar,
  };
  try {
    const res = await axios.post('/auth/google', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert('Cannot login', 'danger'));
  }
};

// facebook login
export const facebookLogin = ({ accessToken, userID }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    accessToken,
    userID,
  };
  try {
    const res = await axios.post('/auth/facebook', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert('Cannot login', 'danger'));
  }
};

//login agent
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert('Invalid Credentials', 'danger'));
  }
};

//logout agent
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
