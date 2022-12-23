import React from "react";

const CommentList = ({ comment }) => {
  return (
    <li id="commentList">
      <span className="myName">김진우</span>
      <span> {comment} </span>
    </li>
  );
};

export default CommentList;
