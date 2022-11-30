import { useEffect } from 'react';

export default function useClickOutside(ref, fun) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      fun();
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [ref]);
  // когда мы меняем ссылку, снова происходит ререндер

  return;
}
