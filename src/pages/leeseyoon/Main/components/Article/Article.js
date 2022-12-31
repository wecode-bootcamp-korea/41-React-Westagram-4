import React, { useState } from "react";
import "./Article.scss";
import Comment from "./components/Comment";
import NewComment from "./components/NewComment";

const Article = () => {
  const dummyComments = [
    { id: 1, name: "Syndi", content: "Cool!!😀" },
    { id: 2, name: "Antonietta", content: "Hello 😎" },
    {
      id: 3,
      name: "Gaston",
      content: "React 👍",
    },
    { id: 4, name: "Henry", content: "Good 😊" },
  ];
  const [comments, setComments] = useState(dummyComments);

  const removeComment = id => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <article>
      <div className="feed-header">
        <div className="left">
          <div className="new-recommended-img-box">
            <img
              className="new-story-img"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/884.jpg"
              alt=""
            />
          </div>
          <div className="font-weight-600">Valentin</div>
        </div>
        <div className="right">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="feed-img">
        <img
          src="https://images.unsplash.com/photo-1621508654686-809f23efdabc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvcml6b258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className="section-wrap font-size-14">
        <section className="feed-body">
          <div className="left">
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-comment" />
            <i className="fa-regular fa-share-from-square" />
          </div>
          <div className="right">
            <i className="fa-regular fa-bookmark" />
          </div>
        </section>
        <div className="like-wrap">
          <div className="like-poeple-img-box">
            <img
              className="new-story-img"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg"
              alt=""
            />
          </div>
          <strong>Ronaldo</strong>
          <span>님&nbsp</span>
          <strong>외 6명이</strong>
          <span>이 좋아합니다.</span>
        </div>
        <div className="text">
          Temporibus et tenetur ut tenetur quam corrupti possimus.
        </div>
        <div className="comments">
          {comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                removeComment={removeComment}
              />
            );
          })}
        </div>
        <NewComment comments={comments} setComments={setComments} />
      </div>
    </article>
  );
};

export default Article;
