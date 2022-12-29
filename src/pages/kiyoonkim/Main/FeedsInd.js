import React, { useState } from "react";
import CommentList from "./Comment";

const FeedsInd = content => {
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
    <div className="feeds">
      <article>
        <div className="articles">
          <div className="articles-header">
            <div className="profiles">
              <div>
                <img
                  src={content.feed.profilethumb}
                  alt="profile-pic"
                  className="profile-tn"
                />
              </div>
              <div className="profile-id">{content.feed.userid}</div>
            </div>
            <div className="article-setting">
              <i className="fa fa-ellipsis-h" />
            </div>
          </div>
          <div>
            <img src={content.feed.postpic} alt="post-pic" className="posts" />
          </div>
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
            <div>
              <img
                src={content.feed.firstlikethumb}
                alt="firstlike"
                className="firstlike-tn"
              />
            </div>
            <div className="firstlike-id">
              <span>{content.feed.firstlikeuserid}</span>
            </div>
            <div className="likes-status">
              <p>
                님 <span className="likes-status-num">외 10명</span>
                <span>이 좋아합니다.</span>
              </p>
            </div>
          </div>
          <div className="first-comment">
            <div className="first-comment-id">{content.feed.userid}</div>
            <div className="first-comment-content">
              <span>{content.feed.caption}</span>
            </div>
          </div>
          <ul className="posted-comments">
            {commentArr.map(comment => {
              return (
                <CommentList
                  userName={comment.userName}
                  comment={comment}
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
  );
};

export default FeedsInd;
