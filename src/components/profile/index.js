import React from 'react';
import './style.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <div className="profile_cover">
            <img
              src="https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <div className="update_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Add cover Photo
              </div>
            </div>
          </div>
      {/* --------------- */}
        </div>
      </div>
    </div>
  );
}

export default Profile;