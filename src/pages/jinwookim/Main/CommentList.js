import React from "react";

const CommentList = ({ comment, id, commentArr, setCommentArr }) => {
  const deleteComment = id => {
    setCommentArr(commentArr.filter(user => user.id !== id));
  };
  return (
    <li id="commentList">
      <span className="myName">김진우</span>
      <span> {comment} </span>
      <button>좋아요</button>
      <button className="deleteBtn" onClick={() => deleteComment(id)}>
        삭제
      </button>
    </li>
  );
};

export default CommentList;
