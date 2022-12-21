import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
// 김코드의 컴포넌트
import Loginchoyunhwan from "./pages/choyunhwan/Login/Login";
import Mainchoyunhwan from "./pages/choyunhwan/Main/Main";

import Loginkimkiyoon from "./pages/kiyoonkim/Login/Login";
import Mainkimyoon from "./pages/kiyoonkim/Main/Main";

import Loginkimjinwoo from "./pages/jinwookim/Login/Login";
import Mainjinwookim from "./pages/jinwookim/Main/Main";

// 김개발의 컴포넌트
import Loginleeseyoon from "./pages/seyoon/Login/Login";
import Mainleeseyoon from "./pages/seyoon/Main/Main";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/Loginchoyunhwan" element={<Loginchoyunhwan />} />
        <Route path="/Loginkimkiyoon" element={<Loginkimkiyoon />} />
        <Route path="/Loginkimjinwoo" element={<Loginkimjinwoo />} />
        <Route path="/Loginleeseyoon" element={<Loginleeseyoon />} />

        <Route path="/Mainchoyunhwan" element={<Mainchoyunhwan />} />
        <Route path="/Mainkimyoon" element={<Mainkimyoon />} />
        <Route path="/Loginkimjinwoo" element={<Mainjinwookim />} />
        <Route path="/Mainleeseyoon" element={<Mainleeseyoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
