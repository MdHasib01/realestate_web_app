import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import propertiSlice from "./features/property/propertySlice";
import favoritesSlice from "./features/favourites/favouritesSlice";
import Cookies from "js-cookie";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertiSlice,
    favorites: favoritesSlice,
  },
});
store.subscribe(() => {
  const state = store.getState();
  Cookies.set("favorites", JSON.stringify(state.favorites), { expires: 7 }); // Set cookie with 7 days expiration
});
