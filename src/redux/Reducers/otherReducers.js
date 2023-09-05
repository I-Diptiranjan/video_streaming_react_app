import { createReducer } from '@reduxjs/toolkit';

export const otherReducer = createReducer(
  {},
  {
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    requestMovieRequest: state => {
      state.loading = true;
    },
    requestMovieSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    requestMovieFailed: (state, action) => {
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
