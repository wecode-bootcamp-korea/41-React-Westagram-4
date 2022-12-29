import React from "react";

const CommentList = ({ comment, commentArr, setCommentArr }) => {
  const deleteComment = id => {
    const filteredData = commentArr.filter(c => c.id !== comment.id);
    setCommentArr(filteredData);
  };
  return (
    <li id="commentList">
      <span className="myName">{comment.userName}</span>
      <span> {comment.comment} </span>
      <span> {comment.nickname} </span>
      <span> {comment.content} </span>
      <button className="deleteBtn" onClick={() => deleteComment(comment.id)}>
        삭제
      </button>
    </li>
  );
};

export default CommentList;
