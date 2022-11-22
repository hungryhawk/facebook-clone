import './style.css';
import Dots from '../../../src/svg/dots';
import { useState } from 'react';

const words = ['Posts', 'About', 'Friends', 'Photo', 'Videos', 'More'];

export default function ProfileMenu() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="profile_menu_wrap">
      <div className="profile_menu">
        {words.map((word) => (
          <a
            className={`hover1 ${selected === word ? 'active' : ''}`}
            onClick={() => setSelected(word)}
          >
            {word}
          </a>
        ))}

        <div className="p10_dots hover1">
          <Dots />
        </div>
      </div>
    </div>
  );
}
