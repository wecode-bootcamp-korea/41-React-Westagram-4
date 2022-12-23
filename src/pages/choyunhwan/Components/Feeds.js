import React from "react";

function Feeds() {
  return (
    <div className="feeds">
      <article className="articleborder">
        <div className="articleTop">
          <img
            className="profile"
            alt="profile"
            src="./images/choyunhwan/tae.jpeg"
          />
          <p>LBJ</p>
          <img
            className="dot"
            alt="profile"
            src="./images/choyunhwan/more.png"
          />
        </div>
        <div className="articleCenter">
          <img
            className="feedimg"
            alt="profile"
            src="./images/choyunhwan/r662876_2_1296x729_16-9.jpg"
          />
          <div className="imoticon">
            <img
              id="heartIcon"
              className="iconSize"
              alt="profile"
              src="./images/choyunhwan/emtyheart.png"
            />
            <img
              id="ICONSIZE"
              className="iconSize"
              alt="profile"
              src="./images/choyunhwan/chat.png"
            />
            <img
              id="ICONSIZE"
              className="iconSize"
              alt="profile"
              src="./images/choyunhwan/12027312981650100392-128.png"
            />
            <img
              id="ICONSIZE"
              className="iconSize"
              alt="profile"
              src="./images/choyunhwan/save-instagram.png"
            />
          </div>
          <div className="commentwindow">
            <div className="feedLikeNum">
              <img
                className="feedcomentimg"
                alt="profile"
                src="./images/choyunhwan/kim.jpeg"
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
  );
}

export default Feeds;
