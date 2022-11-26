import React from 'react';
import Header from './components/header';
import Profile from './components/profile';
import { user } from './data/userInformation';

function App() {
  const [avatar, setAvatar] = React.useState([]);

  return (
    <>
      {user.map((member) => (
        <Header
          key={member.id}
          avatarUrl={member.avatarUrl}
          avatar={avatar}
          setAvatar={setAvatar}
        />
      ))}
      {user.map((member) => (
        <Profile
          key={member.id}
          backImg={member.backImg}
          avatarUrl={member.avatarUrl}
          userName={member.userName}
          avatar={avatar}
          setAvatar={setAvatar}
         
        />
      ))}
    </>
  );
}

export default App;
