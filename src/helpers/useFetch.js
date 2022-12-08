import { useState, useEffect } from 'react';

export default function useFetch(data) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setInfo(data);
    }, 2000);
  }, []);
  return info;
}
