import './style.css'
export default function Cover({user}) {
  return (
    <div className="profile_cover">
            <img src={user.backImg} alt="" />
            <div className="update_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Add cover Photo
              </div>
            </div>
          </div>
  )
}
