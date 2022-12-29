import React from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import Feeds from "../Components/Feeds";
import Right from "../Components/Right";
import Footer from "../Components/Footer";

function Main() {
  return (
    <>
      <Nav />

      <main>
        <Feeds />

        <Right />
      </main>
      <Footer />
    </>
  );
}

export default Main;
