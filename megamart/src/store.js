import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../src/slices/productSlice.jsx';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
