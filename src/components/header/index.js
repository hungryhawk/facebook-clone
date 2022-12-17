import './style.css';
import React, { useState } from 'react';
import HeaderLeft from './headerLeft';
import HeaderMiddle from './headerMiddle';
import HeaderRight from './headerRight';
import SearchMenu from './searchMenu';

export default function Header({ user, setShow, show }) {
  const color = 'gray';
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <header>
      <HeaderLeft color={color} setShowSearchMenu={setShowSearchMenu} />
      {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
      <HeaderMiddle color={color} setShow={setShow} show={show} />
      <HeaderRight user={user} setShow={setShow} />
    </header>
  );
}
