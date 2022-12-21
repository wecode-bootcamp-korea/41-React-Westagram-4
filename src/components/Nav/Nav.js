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
            <input id="search_id" type="text" placeholder="검색" />
          </div>
          <div className="suggestion-box">
            <ul className="search-results" />
          </div>
        </div>
        <div className="topright">
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
          <div>
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
