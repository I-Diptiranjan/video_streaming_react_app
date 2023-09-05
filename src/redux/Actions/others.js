import { server } from '../Store';
import axios from 'axios';

export const contact = (name, email, message) => async dispatch => {
  try {
    dispatch({ type: 'contactRequest' });
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'contactSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'contactFailed',
      payload: error.response.data.message,
    });
  }
};

export const requestMovie = (name, email, movie) => async dispatch => {
  try {
    dispatch({ type: 'requestMovieRequest' });
    const { data } = await axios.post(
      `${server}/requestmovie`,
      { name, email, movie },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'requestMovieSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'requestMovieFailed',
      payload: error.response.data.message,
    });
  }
};
