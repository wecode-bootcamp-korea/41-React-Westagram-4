import React, { useState, useEffect } from "react";
import Nav from "../../../components/Nav/Nav";
import MainRightHeader from "./MainRightHeader";
import Story from "./Story";
import Recommend from "./Recommend";
import "./Main.scss";
import Feeds from "./feeds/Feeds";
import { ASIDE_LIST } from "./constantData/AsideList";

function Mainkimjinwoo() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("./data/feedData.json")
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        <div className="feedsList">
          {feedList.map((data, i) => {
            return <Feeds key={i} feed={data} />;
          })}
        </div>
        <div className="main-right">
          <MainRightHeader />
          <Story />
          <Recommend />
          <p className="asideParagraph">
            {ASIDE_LIST.map(menuList => {
              return <span key={menuList.id}>{menuList.asideName}</span>;
            })}
          </p>
          <p className="instagramCopyright">© 2022 INSTAGRAM</p>
        </div>
      </div>
    </>
  );
}
export default Mainkimjinwoo;
