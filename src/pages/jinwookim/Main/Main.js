import React, { useState, useEffect } from "react";
import Nav from "../../../components/Nav/Nav";
import MainRightHeader from "./MainRightHeader";
import Story from "./Story";
import Recommend from "./Recommend";
import "./Main.scss";
import Feeds from "./Feeds";
import { ASIDE_LIST } from "./AsideList";

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
          <p>
            {ASIDE_LIST.map(menuList => {
              return <span key={menuList.id}>{menuList.asideName}</span>;
            })}
          </p>
          <p>© 2019 INSTAGRAM</p>
        </div>
      </div>
    </>
  );
}
export default Mainkimjinwoo;
