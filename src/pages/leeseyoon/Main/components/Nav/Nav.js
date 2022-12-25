import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="global-nav">
      <div className="left">
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
          alt=""
        />
        <span className="text-logo">Westagram</span>
      </div>
      <div className="center ele-wrap">
        <input className="search" type="text" />
      </div>
      <div className="right">
        <i className="bi bi-brightness-high-fill" id="toggleDark" />
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt=""
        />
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt=""
        />
        <img
          className="icon-logo height-20px nav-icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Nav;
