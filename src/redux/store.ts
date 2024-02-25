import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
  },
  middleware: (getDefaultMiddlerware) => getDefaultMiddlerware(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
