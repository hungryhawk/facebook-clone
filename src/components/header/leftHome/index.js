import LeftLink from './leftLink';
import React, { useState } from 'react';
import './style.css';
import { left } from '../../../data/left';
import ArrowDown from '../../../assets/icons/arrowDown';
export default function LeftHome({ user }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="left_home">
      <div className="left_link hover1">
        <img src={user.avatarUrl} alt="" height={20} />
        <span>{user.userName}</span>
      </div>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))}
      {!visible && (
        <div className="left_link hover1" onClick={() => setVisible(true)}>
          <div className="small_circle">
            <ArrowDown />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more_left">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div className="left_link hover1" onClick={() => setVisible(false)}>
            <div className="small_circle rotate360">
              <ArrowDown />
            </div>
            <span>See less</span>
          </div>
        </div>
      )}
    </div>
  );
}
