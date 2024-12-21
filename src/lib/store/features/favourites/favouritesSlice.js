import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialFavorites = Cookies.get("favorites")
  ? JSON.parse(Cookies.get("favorites"))
  : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavorites,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      if (state.includes(productId)) {
        return state.filter((id) => id !== productId);
      } else {
        return [...state, productId];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
