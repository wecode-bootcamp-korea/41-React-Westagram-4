import React from "react";

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
export default Recommend;
