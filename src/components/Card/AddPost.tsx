import React from 'react';

interface AddPostProps {
    setModalOpen: (isOpen: boolean) => void;
}

const AddPost: React.FC<AddPostProps> = ({ setModalOpen }) => {
    return (
        <div
            className="relative w-[407px] h-[533px] rounded-[43px] border p-4 flex justify-center items-center cursor-pointer"
            onClick={() => setModalOpen(true)}
        >
            <span className="text-6xl font-bold">+</span>
        </div>
    );
};

export default AddPost;
