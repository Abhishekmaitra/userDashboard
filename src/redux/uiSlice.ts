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
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
