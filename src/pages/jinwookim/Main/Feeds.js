import React, { useState } from "react";
import CommentList from "./CommentList";

const Feeds = () => {
  let [comment, setComment] = useState("");
  let [commentArr, setCommentArr] = useState([]);

  const AddComment = event => {
    setComment(event.target.value);
  };

  const posting = event => {
    event.preventDefault();
    setCommentArr([
      ...commentArr,
      {
        userName: "김진우",
        comment: comment,
        id: Math.ceil(Math.random() * 100), //useRef() 를 이용하는 것이 더 좋음.
      },
    ]);
    setComment("");
  };

  return (
    <div className="feeds">
      <div className="feeds-header">
        <div className="feeds-header-left">
          <img
            className="feeds-header-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdm-0sysH945tSJdNXW60Bg-K7Hqfxb3sqw&usqp=CAU"
            alt="피드 왼쪽 아이콘"
          />
          <span>canon_mj</span>
        </div>
        <div>
          <i id="feeds-header-more" className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <article>
        <img
          src="../../../images/jinwookim/articleImage.png"
          alt="아티클이미지"
        />
      </article>
      <div className="feeds-bottom">
        <div className="contents-header">
          <div className="contents-icons">
            <i
              className="fa-solid fa-heart fa-lg"
              style={{ color: "rgb(255, 0, 0)" }}
            />
            <i className="fa-regular fa-comment fa-lg" />
            <i className="fa-solid fa-arrow-up-from-bracket fa-lg" />
          </div>
          <div className="contents-icons-bookmark">
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>

        <div className="contents-container">
          <div className="contents-body">
            <div className="contents-body-first-line">
              <img
                className="contents-body-icon"
                src="https://i.pinimg.com/474x/3b/5e/6c/3b5e6c7caaeeba45303704e74f7f92b5.jpg"
                alt="컨텐츠 아이콘"
              />
              <span style={{ fontWeight: "bold" }}>aineworld</span>
              <span>님</span>
              <span style={{ fontWeight: "bold" }}>외 10명</span>
              <span>이 좋아합니다</span>
            </div>
            <br />
            <span style={{ fontWeight: "bold" }}>canon-mj</span>
            <span>위워크에서 진행한 베이킹 클래스...</span>
            <span style={{ color: "rgb(172, 172, 172)" }}>더 보기</span>
            <br />
            <div className="contents-body-heart">
              <div>
                <span style={{ fontWeight: "bold" }}>neceosecius</span>
                <span>거봐 좋았잖아~~~~~🙆‍♀️</span>
              </div>
              <i className="fa-regular fa-heart" />
            </div>
            <span className="contents-body-time">42분 전</span>
            <div className="contents-body-comments" />
            <ul>
              {commentArr.map((comment, i) => (
                <CommentList
                  key={i}
                  comment={comment}
                  id={comment.id}
                  setCommentArr={setCommentArr}
                  commentArr={commentArr}
                  userName={comment.userName}
                />
              ))}
            </ul>
          </div>
        </div>
        <form>
          <div className="input-box">
            <input
              className="comment-input"
              type="text"
              placeholder="댓글 달기 ..."
              onChange={AddComment}
              value={comment}
            />
            <button
              type="submit"
              className="feeds-comment-btn"
              onClick={posting}
            >
              <span className="">게시</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feeds;
