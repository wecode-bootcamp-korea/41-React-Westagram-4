import "./Comment.scss";

const Comment = ({ comment, removeComment }) => {
  return (
    <li className="comment">
      <strong className="name">{comment.name}</strong>
      <span className="content">{comment.content}</span>
      <img
        className="delete"
        onClick={() => removeComment(comment.id)}
        src="./images/leeseyoon/delete.png"
        alt="delete button"
      />
    </li>
  );
};

export default Comment;
