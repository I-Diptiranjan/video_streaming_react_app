import { configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  subscriptionReducer,
  updateProfileReducer,
  userReducer,
} from './Reducers/userReducer';
import { movieReducer } from './Reducers/movieReducer';
import { otherReducer } from './Reducers/otherReducers';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: updateProfileReducer,
    movie: movieReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;

export const server = 'https://cinematic-universe.onrender.com/api/v1';
