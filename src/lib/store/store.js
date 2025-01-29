import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import propertiSlice from "./features/property/propertySlice";
import favoritesSlice from "./features/favourites/favouritesSlice";
import userSlice from "./features/user/userSlice";
import Cookies from "js-cookie";
import agentSlice from "./features/agent/agentSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    property: propertiSlice,
    favorites: favoritesSlice,
    users: userSlice,
    agent: agentSlice,
  },
});
store.subscribe(() => {
  const state = store.getState();
  Cookies.set("favorites", JSON.stringify(state.favorites), { expires: 7 }); // Set cookie with 7 days expiration
});
