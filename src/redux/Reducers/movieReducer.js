import { createReducer } from '@reduxjs/toolkit';

export const movieReducer = createReducer(
  { movies: [], episodes: [] },
  {
    getAllMoviesRequest: state => {
      state.loading = true;
    },
    getAllMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    getAllMoviesFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMoviesRequest: state => {
      state.loading = true;
    },
    getMoviesSuccess: (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
    },
    getMoviesFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlaylistRequest: state => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlaylistFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
