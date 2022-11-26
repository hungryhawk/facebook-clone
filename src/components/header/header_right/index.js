import './style.css';
import React from 'react';
import { Avatar } from '@mui/material';
import Menu from '../../../svg/menu';
import Messenger from '../../../svg/messenger';
import Notifications from '../../../svg/notifications';

function HeaderRight({ avatarUrl, avatar, setAvatar }) {
  React.useEffect(() => {
    setTimeout(() => {
      setAvatar(avatarUrl);
    }, 1000);
  }, []);
  return (
    <div className="header_right">
      <div className="circle_icon hover1">
        <Menu />
      </div>
      <div className="circle_icon hover1">
        <Messenger />
      </div>
      <div className="circle_icon hover1">
        <Notifications />
      </div>
      <div className="circle_icon hover1">
        <Avatar src={avatar} />
      </div>
    </div>
  );
}

export default HeaderRight;