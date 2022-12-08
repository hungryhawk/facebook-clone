import './style.css';
import React from 'react';
import Logo from '../../../svg/logo';
import Search from '../../../svg/search';

function HeaderLeft({ color, setShowSearchMenu }) {


  return (
    <div className="header_left">
      {/* <div style={{display: 'none'}}> */}
      <div className="header_logo">
        <div className="circle">
          <Logo />
        </div>
      </div>
      {/* TODO: remove class search 1 */}
      <div className="search search1" onClick={() => setShowSearchMenu(true)}>
        <Search color={color} />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hide_input"
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default HeaderLeft;
