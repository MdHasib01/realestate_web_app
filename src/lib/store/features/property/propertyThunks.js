"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
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
          "Content-Type": "multipart/form-data",
        }
      );
      toast.success("Property added successfully!");
      return response.data.data;
    } catch (error) {
      toast.error("Property registration failed!");
      console.error("Error:", error);
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

export const deleteProperty = createAsyncThunk(
  "property/deleteProperty",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${id}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      Swal.fire({
        title: "Success!",
        text: "Property deleted successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      return response.data.data;
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Property deletion failed!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error("Error:", error);
      return rejectWithValue(error.response?.data || "Deletion failed");
    }
  }
);
