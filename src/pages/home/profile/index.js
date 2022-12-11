import './style.css';
import React from 'react';
import ProfilePictureInfos from './ProfilePictureInfo';
import ProfileMenu from './profileMenu';
import Cover from './profileCover';

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
