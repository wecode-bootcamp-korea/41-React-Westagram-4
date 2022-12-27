import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <nav>
      <div className="topmenu">
        <div className="toplogo">
          <div>
            <i className="fa fa-instagram" />
          </div>
          <div>
            <span className="logoword">&nbsp;Westagram</span>
          </div>
        </div>
        <div className="nav-center">
          <div className="searchbar">
            <i className="fa fa-search" />
            <input type="text" placeholder="검색" />
          </div>
          <div className="suggestion-box">
            <ul className="search-results" />
          </div>
        </div>
        <div className="topright">
          <div>
            <img
              src="https://static.thenounproject.com/png/682477-200.png"
              alt="home"
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5883/5883507.png"
              alt="directmessage"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="search"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="likes"
            />
          </div>
          <div className="my-profile">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
