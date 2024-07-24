import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
import { Post } from "../types/post";
import { addPost, updatePost, deletePost } from "../store/posts/slice";

interface UsePosts {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: number) => void;
}

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePosts = (): UsePosts => {
  const posts = useAppSelector((state: RootState) => state.posts.posts);
  const dispatch = useAppDispatch();

  return {
    posts,
    addPost: (post: Post) => dispatch(addPost(post)),
    updatePost: (post: Post) => dispatch(updatePost(post)),
    deletePost: (id: number) => dispatch(deletePost(id)),
  };
};
