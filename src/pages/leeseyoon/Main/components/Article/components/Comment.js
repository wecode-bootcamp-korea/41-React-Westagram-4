import "./Comment.scss";

const Comment = ({ obj, removeComment }) => {
  // console.log("obj :", obj);
  // console.log("key :", key);
  // console.log(removeComment);

  return (
    <li className="comment">
      <strong className="name">{obj.name}</strong>
      <span className="content">{obj.comment}</span>
      <img
        className="delete"
        onClick={() => removeComment(obj.id)}
        src="./images/leeseyoon/delete.png"
        alt="delete button"
      />
    </li>
  );
};

// const Comment = props => {
//   console.log("props :", props);
//   // console.log("key :", props.key);
//   // console.log("get key :", props["get key"]);
//   // console.log("obj :", obj);
//   // console.log("key :", key);
//   // console.log(removeComment);

//   return (
//     <li className="comment" id={null}>
//       <strong>{null}</strong>
//       <span>{null}</span>
//       <button onClick={()=>props.removeComment()}>삭제</button>
//     </li>
//   );
// };

export default Comment;
