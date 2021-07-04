import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import styleReducer from '../redux/style/styleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    style: styleReducer

  },
});
