import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from './redux/preference';
import locationReducer from './redux/location';
import restaurantReducer from './redux/restaurant';

export default configureStore({
  reducer: {
    preferences: preferencesReducer,
    location: locationReducer,
    restaurant: restaurantReducer,
  }
});
