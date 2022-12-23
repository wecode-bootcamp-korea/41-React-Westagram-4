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

  const active = id.includes("@") && pw.length > 4;
  let block;
  active ? (block = false) : (block = true);
  let color;
  //block
  active
    ? (color = { backgroundColor: "#67B6FA" })
    : (color = { backgroundColor: "#01376A" });

  return (
    <section className="loginpage">
      <div className="loginContainer">
        <header id="logo">Westagram</header>
        <form className="LoginForm">
          <input
            className="idinput"
            type="text"
            //value={id}
            onChange={saveUserId}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />

          <input
            type="password"
            className="passwordinput"
            placeholder="비밀번호"
            //value={pw}
            onChange={saveUserPw}
          />

          <button
            className="loginbtn"
            disabled={block}
            style={color}
            onClick={() => {
              navigate("/Mainchoyunhwan");
            }}
          >
            로그인
          </button>
        </form>
        <p className="findpassword">비밀번호를 잊으셨나요?</p>
      </div>
    </section>
  );
}

export default Login;
