import React, { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface ModalProps {
   children: React.ReactNode;
   onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
   const modalRef = useRef<HTMLDivElement>(null);
   useClickOutside(modalRef, onClose);

   return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
         <div ref={modalRef} className="bg-white p-8 rounded-[38px] max-w-[714px] w-full">
            {children}
         </div>
      </div>
   );
};

export default Modal;
