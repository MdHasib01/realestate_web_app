"use client";

import { createSlice } from "@reduxjs/toolkit";
import { addProperty, getAllProperty } from "./propertyThunks";

const initialState = {
  properties: [],
  isLoading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch current user cases
      .addCase(getAllProperty.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = action.payload;
      })
      .addCase(getAllProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //add property
      .addCase(addProperty.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default propertySlice.reducer;
