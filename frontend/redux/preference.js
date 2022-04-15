import { createSlice } from  '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {},
  reducers: {
    setPreferences: (state, action) => {
      state.preferences = action.payload
    }
  }
});

export const { setPreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
