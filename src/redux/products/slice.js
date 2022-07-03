import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addToCart } from './action';

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
};

const productSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.products = payload;
      state.isLoading = false;
    },
    [addToCart.fulfilled](state, { payload }) {
      console.log('payload', payload);
      state.isLoading = true;
      state.cart.push(payload);
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
