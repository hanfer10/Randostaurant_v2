import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurant = createAsyncThunk('restaurant/fetchRandomRestaurant', async (_, { getState, dispatch }) => {
  const preferences = getState().preferences;
  const location = getState().location;
  const restaurant = await axios.get('/api/restaurant', {
    params: {
      preferences: preferences,
      location: location
    }
  })
  dispatch(setRestaurant(restaurant));
});

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {},
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
