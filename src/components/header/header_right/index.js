import './style.css';
import React from 'react';
import Menu from '../../../svg/menu';
import Messenger from '../../../svg/messenger';
import Notifications from '../../../svg/notifications';
import Plus from '../../../svg/plus';

function HeaderRight({ user, setShow }) {
  return (
    <div className="header_right">
      <div className="circle_icon hover1" onClick={() => setShow(prev => !prev)}>
        <Plus />
      </div>
      <div className="circle_icon hover1" onClick={() => setShow(prev => !prev)}>
        <Menu />
      </div>
      <div className="circle_icon hover1">
        <Messenger />
      </div>
      <div className="circle_icon hover1">
        <Notifications />
      </div>
      <div
        className="circle_icon hover1"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${user.avatarUrl})`,
          backgroundPosition: "58px 41px"
        }}
      ></div>
    </div>
  );
}

export default HeaderRight;
