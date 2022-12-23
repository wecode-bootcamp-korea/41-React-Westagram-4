import React from "react";
import Nav from "../Components/Nav";
import "./Main.scss";
import Feeds from "../Components/Feeds";
import Right from "../Components/Right";
function Main() {
  return (
    <>
      <Nav />

      <main>
        <Feeds />
        <Right />
      </main>
    </>
  );
}

export default Main;
