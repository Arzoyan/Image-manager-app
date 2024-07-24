import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post';
import AddEditPostForm from '../../components/Card/AddEditPostForm';
import AddPost from '../../components/Card/AddPost';
import ConfirmModal from '../cofirmModal/ConfirmModal';

const CardContainer: React.FC = () => {
    const { posts, addPost, updatePost, deletePost } = usePosts();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<number | null>(null);
    const [currentPost, setCurrentPost] = useState<Post | null>(null);

    const handleAddEdit = (post: Post) => {
        if (currentPost) {
            updatePost(post);
        } else {
            addPost(post);
        }
        setModalOpen(false);
        setCurrentPost(null)
    };

    const handleEdit = (post: Post) => {
        setCurrentPost(post);
        setModalOpen(true);
    };

    const handleDelete = (id: number) => {
        setDeleteModalOpen(id)
        //;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map(post => (
                <Card key={post.id} post={post} onEdit={() => handleEdit(post)} onDelete={() => handleDelete(post.id)} />
            ))}
            <AddPost setModalOpen={setModalOpen} />
            {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <AddEditPostForm post={currentPost} onSubmit={handleAddEdit} />
                </Modal>
            )}
            {isDeleteModalOpen && (
                <Modal onClose={() => setDeleteModalOpen(null)} >
                    <ConfirmModal onClose={() => setDeleteModalOpen(null)} onSubmit={() => {
                        deletePost(isDeleteModalOpen)
                        setDeleteModalOpen(null)

                    }} />
                </Modal>
            )}
        </div>
    );
};

export default CardContainer;
