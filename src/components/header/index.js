import './style.css';
import React, { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';
import SearchMenu from './SearchMenu';

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
