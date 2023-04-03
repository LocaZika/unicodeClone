import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => ({ isLogin: true, user: action.payload }),
    logout: (state, action) => ({ isLogin: false, user: {} }),
  },
});
