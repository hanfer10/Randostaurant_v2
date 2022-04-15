import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from './redux/preference';

export default configureStore({
  reducer: {
    preferences: preferencesReducer,
  }
});
