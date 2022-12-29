import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [heart, setHeart] = useState(false);
  function remove(e) {
    e.target.parentElement.remove();
  }

  function change() {
    setHeart(!heart);
    // e.target.src = "/images/choyunhwan/redheart.png";
    // const imgsrc = e.target.src;
    // console.log(imgsrc);
    // if (imgsrc === "/images/choyunhwan/redheart.png") {
    //   e.target.src = "/images/choyunhwan/emtyheart.png";
    // }
    // if (imgsrc === "/images/choyunhwan/emtyheart.png") {
    //   e.target.src = "/images/choyunhwan/redheart.png";
    // }
  }
  return (
    <li>
      조윤환{comment}
      <img
        onClick={remove}
        alt="trash"
        style={{ width: "15px", height: "15px" }}
        src="/images/choyunhwan/trash.png"
      />
      <img
        id="heart"
        style={{ width: "15px", height: "15px" }}
        onClick={change}
        alt="heart"
        src={
          heart
            ? "/images/choyunhwan/redheart.png"
            : "/images/choyunhwan/emtyheart.png"
        }
      />
      {/* <img
        id="heart"
        onClick={change}
        value={heart}
        alt="heart"
        src="/images/choyunhwan/emtyheart.png"
      /> */}
    </li>
  );
};

export default Comment;
