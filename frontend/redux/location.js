import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: '',
    longitude: '',
  },
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    }
  }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
