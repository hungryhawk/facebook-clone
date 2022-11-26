import React, { useState } from 'react';
import './style.css';
import HomeActive from '../../../svg/homeActive'
import Friends from '../../../svg/friends'
import Watch from '../../../svg/watch'
import Market from '../../../svg/market'
import GroupPeople from '../../../svg/groupPeople'


function HeaderMiddle({ color }) {
  const icons = [
    { name: <HomeActive />, id: 1, tooltip: 'Home' },
    { name: <Friends color={color} />, id: 2, tooltip: 'Friends' },
    { name: <Watch color={color} />, id: 3, tooltip: 'Watch' },
    { name: <Market color={color} />, id: 4, tooltip: 'Marketplace' },
    { name: <GroupPeople color={color} />, id: 5, tooltip: 'Groups' },
  ];

  const [selected, setSelected] = useState();

  return (
    <div className="header_middle">
      {icons.map((icon) => (
        <div
          className={`middle_icon hover1 ${
            selected === icon.id ? 'active' : ''
          }`}
          onClick={() => setSelected(icon.id)}
        >
          <div class="tooltip">
            <span class="tooltiptext">{icon.tooltip}</span>
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderMiddle;
