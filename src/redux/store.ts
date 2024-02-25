import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddlerware) => getDefaultMiddlerware(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
