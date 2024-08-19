import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../template/templateSlice';

const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export default store;
