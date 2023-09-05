import { server } from '../Store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFailed', payload: error.response.data.message });
  }
};

export const getMyProfile = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFailed', payload: error.response.data.message });
  }
};

export const logout = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(
      `${server}/logout`,

      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'loadoutFailed', payload: error.response.data.message });
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFailed', payload: error.response.data.message });
  }
};

export const buySubscripton = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });
    const { data } = await axios.get(`${server}/subscribe`, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionID });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFailed',
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscripton = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });
    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({
      type: 'cancelSubscriptionSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFailed',
      payload: error.response.data.message,
    });
  }
};
