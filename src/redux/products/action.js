import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/all',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('products');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const addToCart = createAsyncThunk(
  'product/addToCart',
  (product, { rejectWithValue }) => {
    try {
      const { favorite, ...neededProduct } = product;

      return neededProduct;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteFromCart = createAsyncThunk(
  'product/deleteFromCart',
  async (id, { rejectWithValue }) => {
    try {
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const sendOrder = createAsyncThunk(
  'Order/SendOrder',
  async (value, { rejectWithValue }) => {
    try {
      const sendedInfo = await axios.post('orders/addOrder', value);
      return sendedInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
