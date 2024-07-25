import { RootState, useAppSelector, useAppDispatch } from '../../store/index';
import { addPost, deletePost, updatePost } from '../../store/posts/slice';
import { IPost } from '../../types/post';

interface UsePosts {
   posts: IPost[];
   addPost: (post: IPost) => void;
   updatePost: (post: IPost) => void;
   deletePost: (id: number) => void;
}

export const usePosts = (): UsePosts => {
   const posts = useAppSelector((state: RootState) => state.posts.posts);
   const dispatch = useAppDispatch();

   return {
      posts,
      addPost: (post: IPost) => dispatch(addPost(post)),
      updatePost: (post: IPost) => dispatch(updatePost(post)),
      deletePost: (id: number) => dispatch(deletePost(id)),
   };
};
