import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { usePosts } from './usePost';
import { IPost } from '../../types/post';
import AddEditPostForm from '../../components/Card/AddEditPostForm';
import AddPost from '../../components/Card/AddPost';
import ConfirmModal from '../confirmModal/ConfirmModal';

const PostsContainer: React.FC = () => {
   const { posts, addPost, updatePost, deletePost } = usePosts();
   const [isModalOpen, setModalOpen] = useState(false);
   const [isDeleteModalOpen, setDeleteModalOpen] = useState<number | null>(null);
   const [currentPost, setCurrentPost] = useState<IPost | null>(null);

   const handleAddEdit = (post: IPost) => {
      if (currentPost) {
         updatePost(post);
      } else {
         addPost(post);
      }
      setModalOpen(false);
      setCurrentPost(null);
   };

   const handleEdit = (post: IPost) => {
      setCurrentPost(post);
      setModalOpen(true);
   };

   const handleDelete = (id: number) => {
      setDeleteModalOpen(id);
   };

   return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-4">
         {posts.map((post) => (
            <Card key={post.id} post={post} onEdit={() => handleEdit(post)} onDelete={() => handleDelete(post.id)} />
         ))}
         <AddPost setModalOpen={setModalOpen} />
         {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
               <AddEditPostForm post={currentPost} onSubmit={handleAddEdit} />
            </Modal>
         )}
         {isDeleteModalOpen && (
            <Modal onClose={() => setDeleteModalOpen(null)}>
               <ConfirmModal
                  onClose={() => setDeleteModalOpen(null)}
                  onSubmit={() => {
                     deletePost(isDeleteModalOpen);
                     setDeleteModalOpen(null);
                  }}
               />
            </Modal>
         )}
      </div>
   );
};

export default PostsContainer;
