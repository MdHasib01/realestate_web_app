"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
