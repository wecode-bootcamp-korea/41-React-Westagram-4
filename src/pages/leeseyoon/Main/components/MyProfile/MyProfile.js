import "./MyProfile.scss";

const MyProfile = () => {
  return (
    <div className="profile-wrap">
      <div className="profile-box">
        <img id="profile-img" alt="" />
      </div>
      <div className="name-wrap">
        <div className="nickname font-size-18 font-weight-600">seyoonleee</div>
        <div className="name font-size-18 aacy">이세윤</div>
      </div>
    </div>
  );
};

export default MyProfile;
