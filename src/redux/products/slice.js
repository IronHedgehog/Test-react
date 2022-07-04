import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts, addToCart, deleteFromCart, sendOrder } from './action';

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
  total: 0,
  order: [],
};

const productSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  extraReducers: {
    [fetchProducts.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.products = payload;
      state.isLoading = false;
    },
    [addToCart.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.cart.push(payload);
      state.total = state.total + payload.price;
      state.isLoading = false;
    },
    [deleteFromCart.fulfilled](state, { payload }) {
      state.isLoading = true;
      const deletedObj = state.cart.find(el => el.id === payload);
      const deletedPrice = deletedObj.price;
      state.total = state.total - deletedPrice;
      state.cart = state.cart.filter(el => el.id !== payload);

      state.isLoading = false;
    },
    [sendOrder.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.order.push(payload.data);
      state.cart = [];
      state.total = 0;
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
