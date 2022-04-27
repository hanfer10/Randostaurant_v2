import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurant = createAsyncThunk('restaurant/fetchRandomRestaurant', async (_, { getState }) => {
  const preferences = getState().preferences;
  const location = getState().location;
  const restaurant = await axios.get('/api/restaurant', {
    params: {
      preferences: preferences,
      location: location
    }
  })
  return restaurant.data;
});

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    clearRestaurant: (state, action) => {
      state.restaurant = {};
      state.status = 'idle';
    }
  },
  extraReducers: {
    [fetchRestaurant.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchRestaurant.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.restaurant = action.payload;
    },
    [fetchRestaurant.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    },
  }
});

export const { clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
