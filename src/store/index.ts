import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Posts/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configure the store with the postsReducer
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
