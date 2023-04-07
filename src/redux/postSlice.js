import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../api";
const initialState = {
  posts: [],
  status: "idle",
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      const index = state.posts.findIndex((p) => p.id === action.payload);
      state.posts.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "succeeded";
      })
      .addCase(getPosts.pending, (state, action) => {
        state.status = "pending";
      });
  },
});
export const postSelector = (state) => state.posts;
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  let posts;
  await get("posts").then(({ data }) => (posts = [...data]));
  return posts;
});
