import { configureStore } from "@reduxjs/toolkit";
import postsListSlice from "./postsListSlice";

import busketSlice from "./sliceBusket";

const store = configureStore({
  reducer: {
    busket: busketSlice.reducer,
    postlist: postsListSlice.reducer,
  },
});

export default store;
