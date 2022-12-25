import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "../styles/common.scss";

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate("/Mainleeseyoon");

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleId = e => {
    setUserId(e.target.value);
    setIdValid(e.target.value.includes("@") ? true : false);
  };
  const handlePw = e => {
    setUserPw(e.target.value);
    setPwValid(e.target.value.length >= 5 ? true : false);
  };

  return (
    <div className="login">
      <section className="login-section">
        {/* <!-- logo container --> */}
        <div className="logo-container">Westagram</div>
        {/* <!-- form --> */}
        <form className="loginForm">
          <input
            className="user-id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onChange={handleId}
          />
          <input
            className="user-pw"
            type="password"
            placeholder="비밀번호"
            value={userPw}
            onChange={handlePw}
          />
          <button
            className="login-btn btn-light-blue"
            onClick={goToMain}
            disabled={idValid && pwValid ? false : true}
          >
            로그인
          </button>
        </form>
        {/* <!-- forgot container --> */}
        <div className="forgotpw-container">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
