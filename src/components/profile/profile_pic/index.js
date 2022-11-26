import './style.css';
import React from 'react';
import { Avatar } from '@mui/material';
import { friends } from '../../../data/userInformation';

export default function ProfilePic({
  avatarUrl,
  userName,
  avatar,
  setAvatar,
}) {
  const [img, setImg] = React.useState([]);
  const [name, setName] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setImg(friends);
      setName(userName);
      setAvatar(avatarUrl);
    }, 2000);
  }, []);

  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <Avatar
            className="profile_w_bg"
            sx={{ width: 168, height: 168 }}
            src={avatar}
          />
          <div className="profile_circle hover1">
            <i className="camera_filled_icon"></i>
          </div>
        </div>
        <div className="profile_w_col">
          <div className="profile_name">{name}</div>
          <div className="profile_friends">{img.length} Friends</div>
          <div className="profile_friend_imgs">
            {img.map((pic, i) => (
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
        <div className="blue_btn">
          <img src="../../../icons/plus.png" alt="" className="invert" />
          <span>Add to story</span>
        </div>
        <div className="gray_btn">
          <i className="edit_icon" />
          <span>Edit profile</span>
        </div>
      </div>
    </div>
  );
}
