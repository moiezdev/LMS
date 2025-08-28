import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import courseReducer from '../features/courseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
  },
});

export default store;