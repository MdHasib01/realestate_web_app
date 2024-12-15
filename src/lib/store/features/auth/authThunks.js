"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";
const accessToken =
  typeof window !== "undefined"
    ? window.localStorage.getItem("accessToken")
    : "";
// Login thunk
console.log("env", process.env.NEXT_PUBLIC_SERVER_URL);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`,
        credentials
      );

      toast.success("Logged out successfully!");
      return response.data.data; // Expected: { user, token }
    } catch (error) {
      toast.error("Login failed!");
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Fetch current user thunk
export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/current-user`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      return response.data.data; // Expected: { user }
    } catch (error) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("accessToken");
      }

      const homeUrl = new URL("/", request.url);
      NextResponse.redirect(homeUrl);
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
