import React, { useState } from 'react';
import Header from '../../components/header';
import LeftHome from '../../components/header/leftHome';
import Profile from '../../components/profile';
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
