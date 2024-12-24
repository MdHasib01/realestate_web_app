"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NextResponse } from "next/server";
const accessToken =
  typeof window !== "undefined"
    ? window.localStorage.getItem("accessToken")
    : "";

// Fetch current user thunk
export const getAllProperty = createAsyncThunk(
  "property/getAllProperty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data.data.docs;
    } catch (error) {
      NextResponse.redirect(homeUrl);
      return rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);

export const addProperty = createAsyncThunk(
  "property/addProperty",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/listProperty`,
        credentials,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      toast.success("User Registered successfully!");
      return response.data.data;
    } catch (error) {
      toast.error("Registration failed!");
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);
