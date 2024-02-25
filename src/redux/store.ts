import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";
import authSliceReducer from "./authSlice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddlerware) => getDefaultMiddlerware(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
