import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { memberSlice } from "./memberSlice";
import { postSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    members: memberSlice.reducer,
    posts: postSlice.reducer,
  },
});
