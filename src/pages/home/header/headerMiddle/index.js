import React, { useState } from 'react';
import './style.css';
import HomeActiveIcon from '../../../../assets/icons/homeActive';
import FriendsIcon from '../../../../assets/icons/friends';
import WatchIcon from '../../../../assets/icons/watch';
import MarketIcon from '../../../../assets/icons/market';
import GroupPeopleIcon from '../../../../assets/icons/groupPeople';
import ThreeLinesIcon from '../../../../assets/icons/threelines';

function HeaderMiddle({ color, setShow, show}) {
  const icons = [
    { name: <HomeActiveIcon />, id: 1, tooltip: 'Home' },
    { name: <FriendsIcon color={color} />, id: 2, tooltip: 'Friends' },
    { name: <WatchIcon color={color} />, id: 3, tooltip: 'Watch' },
    { name: <MarketIcon color={color} />, id: 4, tooltip: 'Marketplace' },
    { name: <GroupPeopleIcon color={color} />, id: 5, tooltip: 'Groups' },
    {
      name: <ThreeLinesIcon color={color} />,
      id: 6,
      tooltip: 'Menu',
    },
  ];

  const [selected, setSelected] = useState(false);

  return (
    <div className="header_middle">
      {icons.map((icon) => (
        <div
          className={`middle_icon hover1 ${
            selected === icon.id ? 'active' : ''
          }`}
          onClick={() => setSelected(icon.id)}
        >
          <div onClick={() => setShow(icon.id === 6 ? !show : show)}>
            <div class="tooltip">
              <span class="tooltiptext">{icon.tooltip}</span>
              {icon.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderMiddle;
