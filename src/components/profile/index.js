import React from 'react';
import ProfilePic from './profile_pic';
import ProfileMenu from './profile_menu';
import './style.css';

function Profile({
  backImg,
  avatarUrl,
  userName,
  avatar,
  setAvatar,
}) {
  const [profile, setProfile] = React.useState(null);

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
            <img src={profile} alt="" />
            <div className="update_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Add cover Photo
              </div>
            </div>
          </div>
          <ProfilePic
            avatarUrl={avatarUrl}
            userName={userName}
            avatar={avatar}
            setAvatar={setAvatar}
          />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Profile;
