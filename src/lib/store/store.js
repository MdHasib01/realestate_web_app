import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import propertiSlice from "./features/property/propertySlice";
export const store = configureStore({
  reducer: { auth: authSlice, property: propertiSlice },
});
