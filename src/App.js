import React from 'react';
import Header from './components/header';
import Profile from './components/profile';
import {user}  from './data/userInformation';
import useFetch from './helpers/useFetch';

function App() {
  const info = useFetch(user);

  return (
    <>
      <Header user={info} />
      <Profile user={info} />
    </>
  );
}

export default App;
