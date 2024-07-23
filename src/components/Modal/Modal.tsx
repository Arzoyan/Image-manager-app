import React from 'react';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded">
                <button className="absolute top-0 right-0 m-4" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
