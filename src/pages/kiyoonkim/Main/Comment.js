import React, { useState } from "react";

const CommentList = ({ comment, commentArr, setCommentArr }) => {
  const [like, setLike] = useState(false);
  const deleteComment = id => {
    const filteredData = commentArr.filter(
      content => content.id !== comment.id
    );
    setCommentArr(filteredData);
  };

  return (
    <li>
      <div className="new-comment-added">
        <div>
          <span>
            <span className="userid-bold">{comment.userName}</span>
            {comment.comment}
          </span>
        </div>
        <div className="posted-cmt-fx">
          <div className="cmt-delete">
            <button
              className="comment-delete-btn"
              onClick={() => deleteComment(comment.id)}
            >
              삭제
            </button>
          </div>
          <div>
            <button
              className="comment-like-btn"
              onClick={() => setLike(prevTrue => !prevTrue)}
            >
              <i
                className={like ? "fa fa-heart" : "fa fa-heart-o"}
                style={{ color: like ? "red" : "black" }}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentList;
