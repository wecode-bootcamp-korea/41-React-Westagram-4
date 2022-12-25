import React from "react";
import "./Main.scss";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import MyProfile from "./components/MyProfile/MyProfile";
import Story from "./components/Story/Story";
import Recommended from "./components/Recommended/Recommended";

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="feed-container">
          <Article />
        </section>
        <section className="main-right-wrap">
          <div className="main-right">
            <MyProfile />
            <div className="container-wrap">
              <Story />
              <Recommended />
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
