import { useState, useEffect } from 'react';
import getFriends from '../api/getFriends';

export default function useFetch() {
  const [infoFriends, setInfoFriends] = useState([]);
  useEffect(() => {
    getFriends().then((dataUserFriends) => setInfoFriends(dataUserFriends));
  }, []);

  return infoFriends;
}
