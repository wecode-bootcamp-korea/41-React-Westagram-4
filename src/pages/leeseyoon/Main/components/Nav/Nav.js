import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="global-nav">
      <div className="left">
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
          alt="logo"
        />
        <span className="text-logo">Westagram</span>
      </div>
      <div className="center ele-wrap">
        <input className="search" type="text" />
      </div>
      <div className="right">
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="explore"
        />
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="heart"
        />
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Nav;
