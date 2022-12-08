import React from 'react';
import ProfilePic from './profile_pic';
import ProfileMenu from './profile_menu';
import './style.css';

function Profile({user}) {

  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <div className="profile_cover">
            <img src={user.backImg} alt="" />
            <div className="update_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Add cover Photo
              </div>
            </div>
          </div>
          <ProfilePic user={user}/>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Profile;
