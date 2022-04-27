import { createSlice } from  '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    price: {
      low: false,
      medium: false,
      high: false,
      extreme: false,
    },
  },
  reducers: {
    setPreferences: (state, action) => {
      return action.payload;
    }
  }
});

export const { setPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
