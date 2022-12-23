import React, { useState } from "react";
import "./Main.scss";
import CommentList from "./Comment";

function Mainkimkiyoon() {
  const [comments, setComments] = useState();
  let [userName] = useState("user");
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comments);
    setFeedComments(copyFeedComments);
    setComments("");
  };

  return (
    <>
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
      <main>
        <div className="feeds">
          <article>
            <div className="articles">
              <div className="articles-header">
                <div className="profiles">
                  <div className="profile-tn" />
                  <div className="profile-id">canon_mj</div>
                </div>
                <div className="article-setting">
                  <i className="fa fa-ellipsis-h" />
                </div>
              </div>
              <div className="posts" />
              <div className="articles-fx">
                <div className="articles-fx-left">
                  <div className="likes">
                    <i class="fa fa-heart-o" />
                  </div>
                  <div className="reply">
                    <i class="fa fa-comment-o" />
                  </div>
                  <div className="share">
                    <i class="fa fa-share-square-o" />
                  </div>
                </div>
                <div className="articles-fx-right">
                  <div className="bookmark">
                    <i class="fa fa-bookmark-o" />
                  </div>
                </div>
              </div>
              <div className="num-likes">
                <div className="firstlike-tn" />
                <div className="firstlike-id">
                  <span>aineworld</span>
                </div>
                <div className="likes-status">
                  <p>
                    님 <span className="likes-status-num">외 10명</span>
                    <span>이 좋아합니다.</span>
                  </p>
                </div>
              </div>
              <div className="first-comment">
                <div className="first-comment-id">danielarsham</div>
                <div className="first-comment-content">
                  <span>Lorem ipsum dolor sit amet consectetur adipis</span>
                </div>
              </div>
              <ul className="posted-comments">
                {feedComments.map((commentArr, i) => {
                  return (
                    <CommentList
                      userName={userName}
                      userComment={commentArr}
                      key={i}
                    />
                  );
                })}
              </ul>
              <div className="new-comment">
                <div className="new-comment-content">
                  <input
                    className="new-comment-txt"
                    type="text"
                    placeholder="댓글 달기..."
                    value={comments}
                    onChange={e => {
                      setComments(e.target.value);
                    }}
                    onKeyUp={e => {
                      e.target.value.length > 0
                        ? setIsValid(true)
                        : setIsValid(false);
                    }}
                    onKeyPress={e => {
                      if (e.key === "Enter") {
                        post();
                      }
                    }}
                  />
                </div>
                <div className="new-comment-post">
                  <button
                    className="new-comment-post-btn"
                    disabled={isValid ? false : true}
                    onClick={post}
                    style={{ color: isValid ? "#0095F6" : "#B3DBFF" }}
                  >
                    게시
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="my-profile">
            <div className="my-profile-pic" />
            <div className="my-profile-account">
              <p className="my-profile-name">wecode_bootcamp</p>
              <p className="my-profile-des">weCode | wecode</p>
            </div>
          </div>
          <div className="stories">
            <div className="stories-head">
              <span className="stories-head-title">스토리</span>
              <span className="stories-head-seeall">모두보기</span>
            </div>
            <div className="stories-1-box">
              <div className="stories-1-pic" />
              <div className="stories-1-account">
                <p className="stories-1-name">wecode_41st</p>
                <p className="stories-1-des">41기 계정</p>
              </div>
            </div>
            <div className="stories-2-box">
              <div className="stories-2-pic" />
              <div className="stories-2-account">
                <p className="stories-2-name">wecode_41st</p>
                <p className="stories-2-des">41기 계정</p>
              </div>
            </div>
            <div className="stories-3-box">
              <div className="stories-3-pic" />
              <div className="stories-3-account">
                <p className="stories-3-name">wecode_41st</p>
                <p className="stories-3-des">41기 계정</p>
              </div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommend-head">
              <span className="recommend-head-title">회원님을 위한 추천</span>
              <span className="recommend-head-seeall">모두보기</span>
            </div>
            <div className="recommend-new-box">
              <div className="recommend-acct-box">
                <div className="recommend-new-pic" />
                <div className="recommend-new-account">
                  <p className="recommend-new-name">wecode_41st</p>
                  <p className="recommend-new-des">회원님을 팔로우합니다.</p>
                </div>
              </div>
              <div className="recommend-new-add">팔로우</div>
            </div>
          </div>
          <div className="etc" />
        </div>
      </main>
    </>
  );
}

export default Mainkimkiyoon;
