import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../Types/post";

export interface PostsState {
  posts: IPost[];
}

const test: IPost[] = [
  {
    id: 1,
    title: "First Post",
    description: "This is the description for the first post.",
    image: "https://via.placeholder.com/150",
    date: "2024-07-24",
  },
  {
    id: 2,
    title: "Second Post",
    description: "This is the description for the second post.",
    image: "https://via.placeholder.com/150",
    date: "2024-07-23",
  },
  {
    id: 3,
    title: "Third Post",
    description: "This is the description for the third post.",
    image: "https://via.placeholder.com/150",
    date: "2024-07-22",
  },
  {
    id: 4,
    title: "Fourth Post",
    description: "This is the description for the fourth post.",
    image: "https://via.placeholder.com/150",
    date: "2024-07-21",
  },
  {
    id: 5,
    title: "Fifth Post",
    description: "This is the description for the fifth post.",
    image: "https://via.placeholder.com/150",
    date: "2024-07-20",
  },
];

const initialState: PostsState = {
  posts: test,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id,
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
