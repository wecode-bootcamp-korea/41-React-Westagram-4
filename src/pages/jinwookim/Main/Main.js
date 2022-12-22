import React from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";

function Mainkimjinwoo() {
  return (
    <>
      <Nav></Nav>
      <div className="main">
        <Feeds></Feeds>
        <div className="main-right">
          <MainRightHeader></MainRightHeader>
          <Story></Story>
          <Recommend></Recommend>
          <p>
            Instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
          </p>
          <p>© 2019 INSTAGRAM</p>
        </div>
      </div>
    </>
  );
}

const Feeds = () => {
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
            <div className="contents-body-comments"></div>
          </div>
        </div>

        <form className="feeds-comment" />
        <div className="input-box">
          <input
            className="comment-input"
            type="text"
            placeholder="댓글 달기 ..."
          />
          <button type="submit" className="feeds-comment-btn">
            <span className="">게시</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MainRightHeader = () => {
  return (
    <div className="main-right-header">
      <img
        className="main-right-icon"
        src="https://images.cobot.me/uploads/space/logo/space-wecode/pdf_ab211233b6576dbb0f8b5826447eeac61e2a833a99ac5d788fbc1a174c3c6ce5.png"
        alt="메인 오른쪽 아이콘"
      />
      <span style={{ fontWeight: "bold" }}>wecode_bootcamp</span>
    </div>
  );
};

const Story = () => {
  return (
    <div className="story">
      <div className="story-header">
        <span style={{ color: "rgb(161, 161, 161)" }}>스토리</span>
        <span style={{ fontWeight: "bold" }}>모두 보기</span>
      </div>
      <div className="story-first-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02Uh5M0o0XOmSbxsrX7-sO4PGDSY1jUtqAQqPLpQ3Y4j49E-0cGVxFCHp8d6XsBysUQs&usqp=CAU"
          alt="스토리 첫번째 아이콘"
        />
        <div className="story-first-name-time">
          <span>_yum_s</span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>16분 전</span>
        </div>
      </div>
      <div className="story-second-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuYUfgb6GObvzEpEtB_d4O7YgY7tsUKsTf9_jXSPBQaTQxtqsTHA0xFLEwuq3mOkQ3Ok&usqp=CAU"
          alt="스토리 두번째 아이콘"
        />
        <div className="story-second-name-time">
          <span>drink_eat_drink</span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>3시간 전</span>
        </div>
      </div>
      <div className="story-third-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNb4Zv3oidIgrsNvEmas4bKiv_rxK2I3zl2bxidZi9fYF3F5nyYQb2p95wwTPEluEqGE&usqp=CAU"
          alt="스토리 세번째 아이콘"
        />
        <div className="story-third-name-time">
          <span>hyukyc</span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>20시간 전</span>
        </div>
      </div>
    </div>
  );
};

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommend-header">
        <span style={{ color: "rgb(172, 172, 172)" }}>회원님을 위한 추천</span>
        <span style={{ fontWeight: "bold" }}>모두 보기</span>
      </div>

      <div className="recommend-first-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pgbZQKfFX10RBv-IDDzM9Ety2UpwVp1igauCI1o63eVAOtdvPcf6Ty5XcJq78hc88dk&usqp=CAU"
          alt="추천 첫번째 아이콘"
        />
        <div className="recommend-first-name-time">
          <span style={{ fontWeight: "bold" }}>joaaaaaahye</span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>
            _legend_a님 외 2명이 ...
          </span>
        </div>
        <div>
          <span style={{ color: "#4EA2F2" }}>팔로우</span>
        </div>
      </div>

      <div className="recommend-second-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEYVfRQKsKioLIIoRJ3wi7es3qKM3HsPZ7wF3BBPJ_FoYdaAVjcrzpVg-2b7fq88u2cE&usqp=CAU"
          alt="추천 두번째 아이콘"
        />
        <div className="recommend-second-name-time">
          <span style={{ fontWeight: "bold" }}> rampart81 </span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>
            ringo.in.seoul님 외 12...
          </span>
        </div>
        <div>
          <span style={{ color: "#4EA2F2" }}>팔로우</span>
        </div>
      </div>

      <div className="recommend-third-icons">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVRR689h-rJJsTMJbY7w4zLP30xxYflNRy6HM164ZjtcJHhgL8su7kCJgBLqdJOx_2D4&usqp=CAU"
          alt="추천 세번째 아이콘"
        />
        <div className="recommend-third-name-time">
          <span style={{ fontWeight: "bold" }}>shawnjjoo</span>
          <br />
          <span style={{ color: "rgb(161, 161, 161)" }}>
            jimmylee1220님 외 1...
          </span>
        </div>
        <div>
          <span style={{ color: "#4EA2F2" }}>팔로우</span>
        </div>
      </div>
    </div>
  );
};

export default Mainkimjinwoo;
