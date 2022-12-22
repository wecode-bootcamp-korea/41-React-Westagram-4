import React from "react";

function Nav() {
  return (
    <nav className="main-nav">
      <div className="main-nav-left">
        <img
          className="main-nav-instaIcon"
          src="data:image/png;base64,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"
          alt="instagram-icon"
        />

        <i className="fa-brands fa-instagram fa-lg" />
        <img
          className="main-nav-left-verticalline"
          src="https://cdn1.iconfinder.com/data/icons/popular-user-interface-2/30/vertical-512.png"
          alt="수직 라인"
        />

        <span className="main-instagram-text">westagram</span>
      </div>

      <div>
        <input id="main-search" type="text" placeholder="검색" />
      </div>

      <div className="main-nav-icons">
        <img
          className="exploror"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="네비게이션 아이콘"
        />
        <img
          className="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트아이콘"
        />
        <img
          className="profile"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="프로필"
        />
      </div>
    </nav>
  );
}

export default Nav;
