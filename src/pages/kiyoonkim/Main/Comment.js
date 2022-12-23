import React from "react";

const CommentList = props => {
  return (
    <li>
      <div className="new-comment-added">
        <div>
          <span>
            <span className="userid-bold">{props.userName}</span>
            {props.userComment}
          </span>
        </div>
        <div className="posted-cmt-fx">
          <div className="cmt-delete">
            <button className="comment-delete-btn">삭제</button>
          </div>
          <div>
            <button className="comment-like-btn">
              <i class="fa fa-heart-o" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentList;
