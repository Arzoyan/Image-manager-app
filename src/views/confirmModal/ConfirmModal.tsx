import React from 'react';

interface ModalProps {
    onClose: () => void;
    onSubmit: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ onSubmit, onClose }) => {
    return (
        <div >
            <h2>Are you shure, you want to delete </h2>
            <div className="flex justify-end mt-4">
                <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded mr-3">
                    Cancel
                </button>
                <button onClick={onSubmit} className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ConfirmModal;
