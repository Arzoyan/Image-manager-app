import React from 'react';
import AddIcon from "../../Assets/Remove.svg"



interface AddPostProps {
    setModalOpen: (isOpen: boolean) => void;
}

const AddPost: React.FC<AddPostProps> = ({ setModalOpen }) => {
    return (
        <div
            className="relative w-[100%] max-w-[407px] h-[533px] rounded-[43px] border p-4 flex justify-center items-center cursor-pointer  bg-gradient-to-r from-green-300 to-green-400"
            onClick={() => setModalOpen(true)}
        >
            <img src={AddIcon} alt="add icon" />
        </div>
    );
};

export default AddPost;
