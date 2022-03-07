import { configureStore } from '@reduxjs/toolkit';
import realEstatesReducer from "./slices/realEstates";

export const store = configureStore({
  reducer: {
    realEstates: realEstatesReducer,
  },
});
