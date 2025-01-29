"use client";

import { createSlice } from "@reduxjs/toolkit";
import {
  getAgentDetails,
  getAllAgents,
  getVerifiedAgents,
} from "./agentThunks";

const initialState = {
  agent: {},
  allAgents: [],
  verifiedAgents: [],
  pendingAgents: [],
  isLoading: false,
};

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all agents cases
      .addCase(getAllAgents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAgents = action.payload;
      })
      .addCase(getAllAgents.rejected, (state) => {
        state.isLoading = false;
      })

      // Fetch verified agents cases
      .addCase(getVerifiedAgents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVerifiedAgents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.verifiedAgents = action.payload;
      })
      .addCase(getVerifiedAgents.rejected, (state) => {
        state.isLoading = false;
      })
      // fetch agent details
      .addCase(getAgentDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAgentDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.agent = action.payload;
      })
      .addCase(getAgentDetails.rejected, (state) => {
        state.isLoading = false;
      });

    //   // Fetch pending agents cases
    //   .addCase(getPendingAgents.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getPendingAgents.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.pendingAgents = action.payload;
    //   })
    //   .addCase(getPendingAgents.rejected, (state) => {
    //     state.isLoading = false;
    //   });
  },
});

export default agentSlice.reducer;
