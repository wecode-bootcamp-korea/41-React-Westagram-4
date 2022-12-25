import "./Article.scss";

const Article = () => {
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
          <div className="comment">
            <strong className="">Sydni </strong>
            <span>Cool!!✨</span>
          </div>
        </div>
        <form onsubmit="return false;" action="" className="new-comment">
          <i className="fa-regular fa-face-smile" />
          <input type="text" placeholder="댓글 달기..." />
          <button
            className="posting font-blue font-weight-600 postingDeactivity"
            disabled={false}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default Article;
