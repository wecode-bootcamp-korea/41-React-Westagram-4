import React, { useState } from "react";

import "./Login.scss";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };
  console.log(id);
  console.log("pw", pw);
  return (
    <section className="loginpage">
      <div className="loginContainer">
        <header id="logo">Westagram</header>

        <input
          className="idinput"
          type="text"
          onChange={saveUserId}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />

        <input
          type="password"
          className="passwordinput"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />

        <button
          className="loginbtn"
          onClick={() => {
            navigate("/Main");
          }}
        >
          로그인
        </button>

        <p className="findpassword">비밀번호를 잊으셨나요?</p>
      </div>
    </section>
  );
}

export default Login;
