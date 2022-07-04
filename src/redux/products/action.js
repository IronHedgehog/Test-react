import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCart } from './selector';
import { useSelector } from 'react-redux';

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
      console.log('product', neededProduct);
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
