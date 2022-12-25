import "./Comment.scss";

const Comment = ({ obj, i }) => {
  return (
    <li key={i} className="comment">
      <strong>{obj.name} </strong>
      <span>{obj.comment}</span>
    </li>
  );
};

export default Comment;
