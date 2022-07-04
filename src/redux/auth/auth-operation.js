import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://testbackk.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (user, { rejectWithValue }) => {
    try {
      console.log('user', user);
      const { data } = await axios.post('users/signup', user);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('users/logout');
      token.unset(data.token);
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const refreshedUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorageToken = state.auth.token;

    if (localStorageToken === null) return rejectWithValue();

    token.set(localStorageToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
