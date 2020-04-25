import { useEffect } from 'react';

/**
 * Source reference: https://codesandbox.io/s/9o3lw5792w?file=/src/Dropdown.js:146-150
 * A Hook for detecting click outside a DOM element using ref
 * @param {DOM Node} ref
 * @param {Boolean} shouldUse
 * @param {Function} callback
 */
export default function useClickOutside({ ref, shouldUse, callback }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      callback();
    };

    if (shouldUse) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shouldUse, callback, ref]);
}
