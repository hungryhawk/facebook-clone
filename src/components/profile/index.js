import React from 'react';
import ProfilePic from './ProfilePic';
import ProfileMenu from './ProfileMenu';
import './style.css';

function Profile({ backImg, avatarUrl, userName, friends, profile, setProfile, avatar, setAvatar}) {

  React.useEffect(() => {
    setTimeout(() => {
      setProfile(backImg);
    }, 1000);
  }, []);

  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <div className="profile_cover">
            <img
              src={profile}
              alt=""
            />
            <div className="update_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Add cover Photo
              </div>
            </div>
          </div>
          <ProfilePic avatarUrl={avatarUrl} userName={userName} friends={friends} avatar={avatar} setAvatar={setAvatar}/>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Profile;
