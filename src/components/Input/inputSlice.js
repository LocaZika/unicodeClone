import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});
export const inputState = (state) => state.input;
