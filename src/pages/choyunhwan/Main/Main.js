import React, { Components } from "react";

import "./Main.scss";

function Main() {
  return (
    <>
      <nav className="menubar">
        <div className="logo">
          <img className="westalogo" alt="profile" src="images/instagram.png" />
          <p className="westa">westagram</p>
        </div>
        <input className="searchbar" type="text" placeholder="검색" />
        <div className="navicon">
          <img
            alt="img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            alt="img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            alt="img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
      "
          />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article className="articleborder">
            <div className="articleTop">
              <img className="profile" alt="profile" src="./images/tae.jpeg" />
              <p>LBJ</p>
              <img className="dot" alt="profile" src="./images/more.png" />
            </div>
            <div className="articleCenter">
              <img
                className="feedimg"
                alt="profile"
                src="./images/r662876_2_1296x729_16-9.jpg"
              />
              <div className="imoticon">
                <img
                  id="heartIcon"
                  className="iconSize"
                  alt="profile"
                  src="./images/emtyheart.png"
                />
                <img
                  id="ICONSIZE"
                  className="iconSize"
                  alt="profile"
                  src="./images/chat.png"
                />
                <img
                  id="ICONSIZE"
                  className="iconSize"
                  alt="profile"
                  src="./images/12027312981650100392-128.png"
                />
                <img
                  id="ICONSIZE"
                  className="iconSize"
                  alt="profile"
                  src="./images/save-instagram.png"
                />
              </div>
              <div className="commentwindow">
                <div className="feedLikeNum">
                  <img
                    className="feedcomentimg"
                    alt="profile"
                    src="./images/kim.jpeg"
                  />
                  <span className="feedLikeNumfont">
                    LBJ님 외 10명이 좋아합니다.
                  </span>
                </div>
                <div className="LIST">
                  <ul className="commentList" />
                </div>
              </div>
              <div className="comment">
                <input
                  className="commentinput"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="commentInput" className="commentUD unstyled-button">
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        <div className="right">
          <div className="main-right">
            <div className="myprofile">
              <img
                className="profile"
                alt="profile"
                src="https://post-phinf.pstatic.net/MjAyMDA4MjdfNjQg/MDAxNTk4NTAwODI3MTI5.Oiiy_qjRWUkDb2SndjMb8YsKh7x9vQ5V8b4WxM_E23og.KjTZW-1KnkB43PBsS9qMjD1PXf984NR65jPLmo5jHvcg.JPEG/shutterstock_713670574.jpg?type=w1200"
              />
              <p className="name">ChoYunHwan</p>
            </div>
          </div>

          <div className="story">
            <div className="storyMenu">
              <span className="storyFontMenu sfMenu">스토리</span>
              <span className="storyFontMenu sfMenu2">모두 보기</span>
            </div>

            <div className="IDTIME">
              <div className="story_ID">
                <img
                  className="story_profile"
                  alt="profile"
                  src="./images/tae.jpeg"
                />
                <div className="storyFontContainer">
                  <span className="story-font">태연</span>
                  <span className="story-font fontlightgray">2분전</span>
                </div>
                <div className="story_ID">
                  <img
                    className="story_profile"
                    alt="profile"
                    src="./images/다운로드 (1).jpeg"
                  />
                  <div className="storyFontContainer">
                    <span className="story-font">durant</span>
                    <span className="story-font fontlightgray">2분전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomand">
              <div className="storyMenu">
                <span className="storyFontMenu reMenu">회원님을위한추천</span>
                <span className="storyFontMenu reMenu2">모두보기</span>
              </div>
              <div className="story_ID">
                <img
                  className="story_profile"
                  alt="profile"
                  src="./images/curry.jpeg"
                />
                <div className="storyFontContainer">
                  <span className="story-font">curry</span>
                  <span className="story-font fontlightgray">
                    yun외 10명이 알고있습니다.
                  </span>
                  <span className="fallow">팔로우</span>
                </div>
                <div className="story_ID">
                  <img
                    className="story_profile"
                    alt="profile"
                    src="./images/다운로드.jpeg"
                  />
                  <div className="storyFontContainer">
                    <span className="story-font">durant</span>
                    <span className="story-font fontlightgray">
                      yun외 10명이 알고있습니다.
                    </span>

                    <span className="fallow">팔로우</span>
                  </div>
                  <div className="story_ID">
                    <img
                      className="story_profile"
                      alt="profile"
                      src="./images/다운로드.jpeg"
                    />
                    <div className="storyFontContainer">
                      <span className="story-font ">durant</span>
                      <span className="story-font fontlightgray">
                        yun외 10명이 알고있습니다.
                      </span>
                      <span className="fallow">팔로우</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="explain fontlightgray">
              <span>
                westagram 정보·지원·홍보·
                센터·API·채용정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
              </span>
              <p className="WESTAGRAM">@2022 WESTAGRAM</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
