import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../pages/Auth";
import { inputSlice } from "../components";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    input: inputSlice.reducer,
  },
});
