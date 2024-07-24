import React from 'react';
import { Post } from '../../types/post';
import { FaTimes } from 'react-icons/fa';

interface CardProps {
    post: Post;
    onEdit: () => void;
    onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ post, onEdit, onDelete }) => {
    return (
        <div className="relative">
            <button
                onClick={onDelete}
                className=" w-[47px] h-[47px] rounded-[41px] absolute top-2 right-2 text-gray-300 hover:text-gray-500 bg-[#fff]"
                aria-label="Delete Post"
            >
                <FaTimes size={24} className="mx-auto" />
            </button>

            <div className=" w-[407px] h-[533px] rounded-[43px] border flex flex-col overflow-hidden">
                <img src={post.image} alt={post.title} className="mb-4 h-[245px]" />
                <div className=' p-4 '>
                    <h2 className="text-xl font-bold mb-4 mt-7">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.date}</p>
                    <div className="flex justify-between mt-4">
                        <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
