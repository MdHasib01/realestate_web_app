"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const accessToken =
  typeof window !== "undefined"
    ? window.localStorage.getItem("accessToken")
    : "";
export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { role },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
export const getAgents = createAsyncThunk(
  "user/getAgents",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users?role=agent`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { role },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
