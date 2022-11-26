import './style.css';
import React from 'react';
import Logo from '../../../svg/logo';
import Search from '../../../svg/search';

function HeaderLeft({ color }) {
  return (
    <div className="header_left">
      <div className="header_logo">
        <div className="circle">
          <Logo />
        </div>
      </div>
      <div className="search search1">
        <Search color={color} />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hide_input"
        />
      </div>
    </div>
  );
}

export default HeaderLeft;
