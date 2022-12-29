import React from "react";

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
export default Story;
