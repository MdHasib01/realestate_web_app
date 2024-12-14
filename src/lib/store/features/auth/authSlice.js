import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    getUser: (state, action) => {
      console.log("getUser------------", action.payload);
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export const { logout, getUser } = authSlice.actions;
export default authSlice.reducer;
