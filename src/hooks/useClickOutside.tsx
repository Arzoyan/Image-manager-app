import { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, onClickOutside: () => void) => {
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            onClickOutside();
         }
      };

      const parentElement = ref.current?.parentElement;

      parentElement?.addEventListener('mousedown', handleClickOutside);

      return () => {
         parentElement?.removeEventListener('mousedown', handleClickOutside);
      };
   }, [ref, onClickOutside]);
};

export default useClickOutside;
