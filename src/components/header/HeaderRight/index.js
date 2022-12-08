import './style.css';
import React from 'react';
import MenuIcon from '../../../assets/icons/menu';
import MessengerIcon from '../../../assets/icons/messenger';
import NotificationsIcon from '../../../assets/icons/notifications';
import PlusIcon from '../../../assets/icons/plus';

function HeaderRight({ user, setShow }) {
  return (
    <div className="header_right">
      <div
        className="circle_icon hover1"
        onClick={() => setShow((prev) => !prev)}
      >
        <PlusIcon />
      </div>
      <div
        className="circle_icon hover1"
        onClick={() => setShow((prev) => !prev)}
      >
        <MenuIcon />
      </div>
      <div className="circle_icon hover1">
        <MessengerIcon />
      </div>
      <div className="circle_icon hover1">
        <NotificationsIcon />
      </div>
      <div
        className="circle_icon hover1"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${user.avatarUrl})`,
          backgroundPosition: '58px 41px',
        }}
      ></div>
    </div>
  );
}

export default HeaderRight;
