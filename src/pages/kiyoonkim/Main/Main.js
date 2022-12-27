import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import CommentList from "./Comment";

function Mainkimkiyoon() {
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const post = e => {
    setCommentArr([
      ...commentArr,
      {
        userName: "jaguar",
        comment: comment,
        id: Math.ceil(Math.random() * 100),
      },
    ]);

    setComment("");
  };

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="articles">
              <div className="articles-header">
                <div className="profiles">
                  <div className="profile-tn" />
                  <div className="profile-id">porsche</div>
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
                  <span>bentley</span>
                </div>
                <div className="likes-status">
                  <p>
                    님 <span className="likes-status-num">외 10명</span>
                    <span>이 좋아합니다.</span>
                  </p>
                </div>
              </div>
              <div className="first-comment">
                <div className="first-comment-id">porsche</div>
                <div className="first-comment-content">
                  <span>Lorem ipsum dolor sit amet consectetur adipis</span>
                </div>
              </div>
              <ul className="posted-comments">
                {commentArr.map((comment, i) => {
                  return (
                    <CommentList
                      userName={comment.userName}
                      comment={comment}
                      key={i}
                      id={comment.id}
                      setCommentArr={setCommentArr}
                      commentArr={commentArr}
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
                    value={comment}
                    onChange={e => {
                      setComment(e.target.value);
                    }}
                    onKeyUp={e => {
                      e.target.value.length > 0
                        ? setIsValid(true)
                        : setIsValid(false);
                    }}
                    onKeyPress={e => {
                      if (isValid === true && e.key === "Enter") {
                        post();
                      }
                    }}
                  />
                </div>
                <div className="new-comment-post">
                  <button
                    className="new-comment-post-btn"
                    style={{
                      color: comment.length > 0 ? "#0095F6" : "#B3DBFF",
                    }}
                    onClick={post}
                    disabled={comment.length > 0 ? false : true}
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
              <p className="my-profile-name">porsche</p>
              <p className="my-profile-des">We are #Sportmade.</p>
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
                <p className="stories-1-name">bmw</p>
                <p className="stories-1-des">15분전</p>
              </div>
            </div>
            <div className="stories-2-box">
              <div className="stories-2-pic" />
              <div className="stories-2-account">
                <p className="stories-2-name">teslamotors</p>
                <p className="stories-2-des">30분전</p>
              </div>
            </div>
            <div className="stories-3-box">
              <div className="stories-3-pic" />
              <div className="stories-3-account">
                <p className="stories-3-name">ferrari</p>
                <p className="stories-3-des">40분전</p>
              </div>
            </div>
            <div className="stories-4-box">
              <div className="stories-4-pic" />
              <div className="stories-4-account">
                <p className="stories-4-name">astonmartinlagonda</p>
                <p className="stories-4-des">45분전</p>
              </div>
            </div>
            <div className="stories-5-box">
              <div className="stories-5-pic" />
              <div className="stories-5-account">
                <p className="stories-5-name">lamborghini</p>
                <p className="stories-5-des">50분전</p>
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
                  <p className="recommend-new-name">mercedesbenz</p>
                  <p className="recommend-new-des">회원님을 팔로우합니다.</p>
                </div>
              </div>
              <div className="recommend-new-add">팔로우</div>
            </div>
          </div>
          <div className="etc">
            <p>
              소개·도움말·홍보 센터·API·채용
              정보·개인정보처리방침·약관·위치·언어
            </p>
            <p>© 2022 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Mainkimkiyoon;
