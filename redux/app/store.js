import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../template/templateSlice';
import textReducer from "../template/textSlice"

const store = configureStore({
  reducer: {
    template: templateReducer,
    texts : textReducer
  },
});

export default store;
