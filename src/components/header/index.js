import './style.css';
import React, { useState } from 'react';
import HeaderLeft from './header_left';
import HeaderMiddle from './header_middle';
import HeaderRight from './header_right';
import SearchMenu from './SearchMenu/Index';

export default function Header({ user, setShow }) {
  const color = 'gray';
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <header>
      <HeaderLeft color={color} setShowSearchMenu={setShowSearchMenu} />
      {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
      <HeaderMiddle color={color} setShow={setShow}/>
      <HeaderRight user={user} setShow={setShow} />
    </header>
  );
}
