import { useState } from "react";
import "./Comment.scss";

const NewComment = ({ comments, setComments }) => {
  const myName = "seyoonleee";

  const [newComment, setNewComment] = useState("");
  const [postValid, setPostValid] = useState(true);
  // console.log("postValid", postValid);

  const handleNewComment = e => {
    setNewComment(e.target.value);
    setPostValid(e.target.value ? false : true);
  };

  const onSubmit = e => {
    e.preventDefault();
    setComments([
      ...comments,
      { id: Date.now(), name: myName, comment: newComment },
    ]);
    setNewComment("");
    setPostValid(true);
  };

  return (
    <form onsubmit="return false;" action="" className="new-comment">
      <i className="fa-regular fa-face-smile" />
      <input
        type="text"
        placeholder="댓글 달기..."
        value={newComment}
        onChange={handleNewComment}
      />
      <button
        className="font-weight-600"
        disabled={postValid}
        onClick={onSubmit}
      >
        게시
      </button>
    </form>
  );
};

export default NewComment;
