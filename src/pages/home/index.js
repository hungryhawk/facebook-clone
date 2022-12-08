import React, { useState } from 'react';
import Header from '../../components/header';
import LeftHome from '../../components/header/leftHome';
import Profile from '../../components/profile';
import { user } from '../../data/userInformation';
import useFetch from '../../helpers/useFetch';

export default function Home() {
  const info = useFetch(user);
  const [show, setShow] = useState(false);
  return (
    <>
      <Header user={info} setShow={setShow} />
      {show && <LeftHome user={info} />}
      {!show && <Profile user={info} />}
    </>
  );
}
