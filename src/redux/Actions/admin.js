import { server } from '../Store';
import axios from 'axios';

export const createMovie = formdata => async dispatch => {
  try {
    dispatch({ type: 'createMovieRequest' });
    const { data } = await axios.post(`${server}/createmovie`, formdata, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      withCredentials: true,
    });
    dispatch({ type: 'createMovieSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'createMovieFailed',
      payload: error.response.data.message,
    });
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    dispatch({ type: 'deleteMovieRequest' });
    const { data } = await axios.delete(`${server}/movie/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'deleteMovieSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteMovieFailed',
      payload: error.response.data.message,
    });
  }
};

export const addEpisodes = (id, formdata) => async dispatch => {
  try {
    dispatch({ type: 'addEpisodeRequest' });
    const { data } = await axios.post(`${server}/movie/${id}`, formdata, {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      withCredentials: true,
    });
    dispatch({ type: 'addEpisodeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'addEpisodeFailed',
      payload: error.response.data.message,
    });
  }
};

export const deleteEpisodes = (movieId, episodeId) => async dispatch => {
  try {
    dispatch({ type: 'deleteEpisodeRequest' });
    const { data } = await axios.delete(
      `${server}/episode?movieId=${movieId}&episodeId=${episodeId}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteEpisodeSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteEpisodeFailed',
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async dispatch => {
  try {
    dispatch({ type: 'getAllUsersRequest' });
    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: 'getAllUsersSuccess', payload: data.users });
  } catch (error) {
    dispatch({
      type: 'getAllUsersFailed',
      payload: error.response.data.message,
    });
  }
};

export const changeUserRole = id => async dispatch => {
  try {
    dispatch({ type: 'changeUserRoleRequest' });
    const { data } = await axios.put(
      `${server}/admin/user/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'changeUserRoleSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'changeUserRoleFailed',
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = id => async dispatch => {
  try {
    dispatch({ type: 'deleteUserRequest' });
    const { data } = await axios.delete(
      `${server}/admin/user/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteUserSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'deleteUserFailed',
      payload: error.response.data.message,
    });
  }
};

export const getDashboardStats = id => async dispatch => {
  try {
    dispatch({ type: 'getAdminStatsRequest' });
    const { data } = await axios.get(
      `${server}/dashboardstats`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFailed',
      payload: error.response.data.message,
    });
  }
};
