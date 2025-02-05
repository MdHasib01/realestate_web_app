"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getAgents, getAllUsers, isAgent } from "./usreThunks";

const initialState = {
  users: [],
  agents: [],
  isApplied: false,
  role: "user",
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch all user cases
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Agents user cases
      .addCase(getAgents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.agents = action.payload;
      })
      .addCase(getAgents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Agents user cases
      .addCase(isAgent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(isAgent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isApplied = action.payload;
      })
      .addCase(isAgent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
