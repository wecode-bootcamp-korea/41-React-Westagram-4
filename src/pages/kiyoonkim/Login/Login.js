import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const saveUserId = function (event) {
    setIdValue(idValue => {
      idValue = event.target.value;
      return idValue;
    });
  };

  const saveUserPw = function (event) {
    setPwValue(pwValue => {
      pwValue = event.target.value;
      return pwValue;
    });
  };

  let loginIdPw = idValue.includes("@") && pwValue.length > 4;

  return (
    <div className="loginsection">
      <p className="logo">Westagram</p>
      <div className="inputsection">
        <input
          onChange={event => saveUserId(event)}
          className="id-input"
          type="text"
          value={idValue}
          placeholder="Phone number, username or email"
        />
        <input
          onChange={event => saveUserPw(event)}
          className="pw-input"
          type="password"
          value={pwValue}
          placeholder="Password"
        />
        <button
          onClick={() => {
            navigate("/Mainkimyoon");
          }}
          className="loginbtn"
          style={{ opacity: loginIdPw ? "1" : "0.3" }}
          disabled={loginIdPw !== true}
        >
          Log in
        </button>
      </div>
      <div className="lostpw">
        <p className="lostpwtxt">Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;
