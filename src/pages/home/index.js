import React, { useState } from 'react';
import Header from '../home/header';
import LeftHome from '../home/header/leftHome';
import Profile from '../home/profile';
import { user } from '../../data/userInformation';
import useFetch from '../../helpers/useFetch';

export default function Home() {
  const info = useFetch(user);
  const [show, setShow] = useState(false);
  return (
    <>
      <Header user={info} setShow={setShow} show={show} />
      {show && <LeftHome user={info} />}
      {!show && <Profile user={info} />}
    </>
  );
}
