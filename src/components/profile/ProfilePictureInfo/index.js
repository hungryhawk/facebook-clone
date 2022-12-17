import './style.css';
import React from 'react';
import useFetchFriends from '../../../hooks/useFetchFriends';
import BlueButton from './blueButton';
import GrayButton from './grayButton';

export default function ProfilePictureInfos({ user }) {
  const infoFriends = useFetchFriends();

  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${user.avatarUrl})`,
              backgroundPosition: '-70px 3px',
            }}
          ></div>

          <div className="profile_circle hover1">
            <i className="camera_filled_icon"></i>
          </div>
        </div>
        <div className="profile_w_col">
          <div className="profile_name">{user.userName}</div>
          <div className="profile_friends_count">
            {infoFriends.length} Friends
          </div>
          <div className="profile_friend_imgs">
            {infoFriends.map((pic, i) => (
              <img
                src={pic.photo}
                key={i.id}
                alt=""
                style={{
                  transform: `translateX(${-i * 7}px)`,
                  zIndex: `${i}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="profile_w_right">
        <BlueButton />
        <GrayButton />
      </div>
    </div>
  );
}
