import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Auth {
  email: string;
  token: string;
  name: string;
}

const initialState: Auth = {
  email: "",
  token: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setAuthName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setAuthEmail, setAuthToken, setAuthName } = authSlice.actions;
export default authSlice.reducer;
