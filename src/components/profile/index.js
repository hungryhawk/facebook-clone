import './style.css';
import React from 'react';
import ProfilePictureInfos from './profile_pictureInfos';
import ProfileMenu from './profile_menu';
import Cover from './profile_cover';

function Profile({ user }) {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <Cover user={user} />
          <ProfilePictureInfos user={user} />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Profile;
