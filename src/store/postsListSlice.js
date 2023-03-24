import { createSlice } from "@reduxjs/toolkit";

const postsListSlice = createSlice({
  name: "postsList",
  initialState: [],
  reducers: {
    addInPostsList(state, actions) {
      const post = actions.payload;
      state = [...state, { post }];
    },
  },
});

export const postsListActions = postsListSlice.actions;

export default postsListSlice;
