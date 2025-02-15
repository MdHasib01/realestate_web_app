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
export const getAgentDetails = createAsyncThunk(
  "agent/getAgentDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/agent/${id}`,
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
export const applyAgent = createAsyncThunk(
  "agent/applyAgent",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/agent`,
        payload
      );

      toast.success("Agent application successfull!");
      return response.data.data; // Expected: { user, token }
    } catch (error) {
      toast.error("Application failed!");
      return rejectWithValue(error.response?.data || "Application failed");
    }
  }
);

