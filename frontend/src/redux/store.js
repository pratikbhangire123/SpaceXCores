import { configureStore } from "@reduxjs/toolkit";
import coreReducer from "./slices/core-slice";

export const store = configureStore({
  reducer: {
    cores: coreReducer,
  },
});
