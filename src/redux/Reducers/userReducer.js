import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: state => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: state => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    registerRequest: state => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
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

export const updateProfileReducer = createReducer(
  {},
  {
    updateProfileRequest: state => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
    changePasswordRequest: state => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfilePicRequest: state => {
      state.loading = true;
    },
    updateProfilePicSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfilePicFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgetPasswordRequest: state => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: state => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromPlaylistRequest: state => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlaylistFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const subscriptionReducer = createReducer(
  {},
  {
    buySubscriptionRequest: state => {
      state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionId = action.payload;
    },
    buySubscriptionFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
    cancelSubscriptionRequest: state => {
      state.loading = true;
    },
    cancelSubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    cancelSubscriptionFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);

export const adminReducer = createReducer(
  {},
  {
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      state.usersCount = action.payload.usersCount;
      state.subscriptionsCount = action.payload.subscriptionsCount;
      state.subscriptionsPercent = action.payload.subscriptionsPercent;
      state.viewsPercent = action.payload.viewsPercent;
      state.usersPercent = action.payload.usersPercent;
      state.viewProfit = action.payload.viewProfit;
      state.subscriptionProfit = action.payload.subscriptionProfit;
      state.userProfit = action.payload.userProfit;
    },
    getAdminStatsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllUsersRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    changeUserRoleRequest: state => {
      state.loading = true;
    },
    changeUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changeUserRoleFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createMovieRequest: state => {
      state.loading = true;
    },
    createMovieSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createMovieFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteMovieRequest: state => {
      state.loading = true;
    },
    deleteMovieSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteMovieFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addEpisodeRequest: state => {
      state.loading = true;
    },
    addEpisodeSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addEpisodeFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteEpisodeRequest: state => {
      state.loading = true;
    },
    deleteEpisodeSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteEpisodeFailed: (state, action) => {
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
