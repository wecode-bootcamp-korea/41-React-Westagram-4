import "./Comment.scss";

const Comment = ({ obj, removeComment }) => {
  // console.log("obj :", obj);
  // console.log("key :", key);
  // console.log(removeComment);

  return (
    <li className="comment">
      <strong>{obj.name}</strong>
      <span>{obj.comment}</span>
      <button onClick={() => removeComment(obj.id)}>삭제</button>
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
