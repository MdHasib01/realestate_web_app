"use client";
import { createSlice } from "@reduxjs/toolkit";
import { login, fetchCurrentUser, fetchCurrentUserLocal } from "./authThunks";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
const storedUser =
  typeof window === "undefined"
    ? null
    : JSON.parse(window.localStorage.getItem("user"));
const storedToken =
  typeof window === "undefined"
    ? null
    : window.localStorage.getItem("accessToken");

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
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("accessToken");
      }
      Cookies.remove("accessToken");
      toast.success("Login successful!");
    },
    getUser: (state, action) => {
      console.log("getUser------------", action.payload);
      state.isLoading = false;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "user",
            JSON.stringify(action.payload.user)
          );
          window.localStorage.setItem(
            "accessToken",
            action.payload.accessToken
          );
        }
        Cookies.set("accessToken", JSON.stringify(action.payload.accessToken), {
          expires: 7,
        });
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch current user cases
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
