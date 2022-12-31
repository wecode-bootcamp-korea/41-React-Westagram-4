import "./Story.scss";

const Story = () => {
  return (
    <div className="story-container">
      <div className="space-between font-weight-600">
        <span className="aacy">스토리</span>
        <span>모두 보기</span>
      </div>

      {/* <!-- 스토리 리스트 --> */}
      <div className="story-list scroll-hide">
        <div className="new-story-list-wrap">
          <div className="new-story-img-box">
            <img id="new-story-img" alt="" />
          </div>
          <div className="nickname-time">
            <div className="txt-line font-weight-600">Gussie</div>
            <div className="aacy">15분 전</div>
          </div>
        </div>
        <div className="new-story-list-wrap">
          <div className="new-story-img-box">
            <img
              className="new-story-img"
              src="https://images.unsplash.com/photo-1671311576479-21411c2ddfb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="nickname-time">
            <div className="txt-line font-weight-600">Robert</div>
            <div className="aacy">15분 전</div>
          </div>
        </div>
        <div className="new-story-list-wrap">
          <div className="new-story-img-box">
            <img
              className="new-story-img"
              src="https://images.unsplash.com/photo-1671129299578-6a364fb3acd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
          <div className="nickname-time">
            <div className="txt-line font-weight-600">Gunnar</div>
            <div className="aacy">15분 전</div>
          </div>
        </div>
        <div className="new-story-list-wrap">
          <div className="new-story-img-box">
            <img
              className="new-story-img"
              src="https://images.unsplash.com/photo-1671212041181-b54a69ea66e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
          <div className="nickname-time">
            <div className="txt-line font-weight-600">Delores</div>
            <div className="aacy">15분 전</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
