import React from 'react';
import { IPost } from '../../Types/post';
// import { FaTimes } from 'react-icons/fa';
import CalendarIcon from "../../Assets/CalendarIcon.svg"
import Vector from "../../Assets/Vector.svg"

interface CardProps {
    post: IPost;
    onEdit: () => void;
    onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ post, onEdit, onDelete }) => {
    return (
        <div className="relative mr-[28px]  mb-8 w-[100%] max-w-[100%]">
            <button
                onClick={onDelete}
                className="flex items-center justify-center w-[47px] h-[47px] rounded-[41px] absolute top-[-10px] right-[-10px] text-gray-300 hover:text-gray-500 bg-[#fff]"
                aria-label="Delete Post"
            >
                <img src={Vector} alt="add icon" />
            </button>

            <div className=" max-w-[407px] w-[100%] h-[533px] rounded-[43px] border flex flex-col overflow-hidden">
                <img src={post.image} alt={post.title} className="h-[245px] w-full object-cover" />
                <div className=' px-4 '>
                    <h2 className="text-xl font-bold mb-4 mt-7 font-bold">{post.title}</h2>
                    <p className='w-full h-[74px] line-clamp-3 overflow-hidden mb-6 font-normal'>{post.description}</p>
                    <div className='mb-6 flex items-center text-[#B9B9B9] '>
                        <img src={CalendarIcon} alt="calendar icon" className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={onEdit} className="min-w-[110px] bg-gradient-to-r from-orange-300 to-orange-500 text-white px-4 py-2 rounded ">

                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
