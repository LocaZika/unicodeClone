import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../api";

const initialState = {
  members: [],
  status: "idle",
};
export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    removeMember: (state, action) => {
      const index = state.members.findIndex((m) => m.id === action.payload);
      state.members.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.members = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getMembers.pending, (state, action) => {
      state.status = "pending";
    });
  },
});
export const memberSelector = (state) => state.members;
export const getMembers = createAsyncThunk("member/getMembers", async () => {
  let members = [];
  await get("users").then(({ data }) => (members = [...data]));
  return members;
});
