import React, { useState } from 'react';
import Card from './Card';
import Modal from '../Modal/Modal';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post';
import AddEditPostForm from '../../features/posts/AddEditPostForm';
import AddPost from './AddPost';

const CardContainer: React.FC = () => {
    const { posts, addPost, updatePost, deletePost } = usePosts();
    const [isModalOpen, setModalOpen] = useState(false);
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
        deletePost(id);
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
        </div>
    );
};

export default CardContainer;
