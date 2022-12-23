import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../../../components/Nav/Nav";

function Loginkimjinwoo() {
  let [userId, setUserId] = useState("");
  let [userPw, setUserPw] = useState("");
  let [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  // Validation 검사해 줄 함수 필요
  const isValidLogin = () => {
    return userId.includes("@") && userPw.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  const goToMain = () => {
    navigate("/Mainkimjinwoo");
  };

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  return (
    <>
      <Nav></Nav>
      <div className="login-container">
        <p className="title">westagram</p>

        <input
          className="email"
          type="text"
          placeholder="전화번호, 사용자  이름 또는 이메일"
          onChange={saveUserId}
          onKeyUp={isValidLogin}
        />

        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
          onKeyUp={isValidLogin}
        />

        <button
          type="button"
          className={isActive ? "activeBtn" : "unActiveBtn"}
          onClick={goToMain}
          disabled={userId === "" || userPw === "" ? true : false}
        >
          로그인
        </button>

        <a className="lost-password">비밀번호를 잊으셨나요?</a>
      </div>
    </>
  );
}

export default Loginkimjinwoo;
