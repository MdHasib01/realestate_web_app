"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken =
  typeof window !== "undefined"
    ? window.localStorage.getItem("accessToken")
    : "";

export const getAllAgents = createAsyncThunk(
  "agent/getAllAgents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/agent/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);

export const getVerifiedAgents = createAsyncThunk(
  "agent/getVerifiedAgents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/agent?status=verified`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
