"use client";

import { createSlice } from "@reduxjs/toolkit";
import {
  addProperty,
  getAllProperty,
  getQueryProperty,
} from "./propertyThunks";

const initialState = {
  properties: [],
  isLoading: false,
  error: null,
  type: "",
  status: "",
  city: "",
  divission: "",
  search: "",
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // Fetch all property
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
      // Fetch query property
      .addCase(getQueryProperty.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getQueryProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = action.payload;
      })
      .addCase(getQueryProperty.rejected, (state, action) => {
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
export const { setType, setStatus, setCity } = propertySlice.actions;
export default propertySlice.reducer;
