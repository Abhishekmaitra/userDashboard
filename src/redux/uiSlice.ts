import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UI {
  isModalOpen: boolean;
  modalType: "login" | "register" | null;
  form: {
    name: string;
    email: string;
    password: string;
    error?: string;
    isLoading: boolean;
  };
}
const initialState: UI = {
  isModalOpen: false,
  modalType: null,
  form: {
    name: "",
    email: "",
    password: "",
    isLoading: false,
  },
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<"login" | "register">) => {
      state.isModalOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.form.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.form.email = action.payload;
      state.form.error = undefined;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.form.password = action.payload;
      state.form.error = undefined;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.form.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.form.error = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setName,
  setEmail,
  setPassword,
  setLoading,
  setError,
} = uiSlice.actions;
export default uiSlice.reducer;
