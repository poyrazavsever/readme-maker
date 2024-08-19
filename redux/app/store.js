import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../slice/templateSlice';
import informationReducer from "../slice/informationSlice"

const store = configureStore({
  reducer: {
    template: templateReducer,
    information : informationReducer
  },
});

export default store;
