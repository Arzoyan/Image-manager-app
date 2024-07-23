import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/slice";

// Configure the store with the postsReducer
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;
