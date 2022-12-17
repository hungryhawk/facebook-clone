import { useState, useEffect } from 'react';
import getUser from '../api/getUser';

export default function useFetch() {
  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    getUser().then((dataUser) => setInfoUser(dataUser));
  }, []);

  return infoUser;
}
