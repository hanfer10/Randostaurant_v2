import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurant = createAsyncThunk('restaurant/fetchRandomRestaurant', async (_something, { getState }) => {
  const preferences = getState().preferences

  const restaurant = await axios.get('/api/restaurant', {
    headers: {
      preferences: preferences
    }
  })
});

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {},
  reducers: {
    randomRestaurant: (state, action) => {

    }
  }
})
