import { LOGIN_USER, LOGOUT_USER, FETCH_DATA, SET_USER_CREDENTIALS } from './actionTypes';

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const fetchData = (res) => {
  return {
    type: FETCH_DATA,
    payload: res,
  };
};

export const setUserCredentials = (username, password) => {
  return {
    type: SET_USER_CREDENTIALS,
    payload: { username, password },
  };
};

