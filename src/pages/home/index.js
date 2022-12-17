import React, { useState } from 'react';
import Header from '../home/header';
import LeftHome from '../home/header/leftHome';
import Profile from '../home/profile';
import useFetch from '../../hooks/useFetch';

export default function Home() {
  const infoUser = useFetch();
  const [show, setShow] = useState(false);
  return (
    <>
      <Header user={infoUser} setShow={setShow} show={show} />
      {show && <LeftHome user={infoUser} />}
      {!show && <Profile user={infoUser} />}
    </>
  );
}
