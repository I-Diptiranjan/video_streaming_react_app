import { server } from '../Store';
import axios from 'axios';

export const getAllMovies =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'getAllMoviesRequest' });
      const { data } = await axios.get(
        `${server}/movies?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: 'getAllMoviesSuccess', payload: data.movies });
    } catch (error) {
      dispatch({
        type: 'getAllMoviesFailed',
        payload: error.response.data.message,
      });
    }
  };

export const getMovieEpisodes = id => async dispatch => {
  try {
    dispatch({ type: 'getMoviesRequest' });
    const { data } = await axios.get(`${server}/movie/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'getMoviesSuccess', payload: data.episodes });
  } catch (error) {
    dispatch({
      type: 'getMoviesFailed',
      payload: error.response.data.message,
    });
  }
};
