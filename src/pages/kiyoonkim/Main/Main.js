import React, { useState, useEffect } from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import Feeds from "./Feeds";
import { MAIN_RIGHT_ETC } from "./MainUI";

function Mainkimkiyoon() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("data/stories.json")
      .then(res => res.json())
      .then(data => {
        setStories(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Feeds />
        <div className="main-right">
          <div className="my-profile">
            <div className="my-profile-pic" />
            <div className="my-profile-account">
              <p className="my-profile-name">porsche</p>
              <p className="my-profile-des">We are #Sportmade.</p>
            </div>
          </div>
          <div className="stories">
            <div className="stories-head">
              <span className="stories-head-title">스토리</span>
              <span className="stories-head-seeall">모두보기</span>
            </div>
            {stories.map(content => {
              return (
                <div className="stories-box">
                  <div>
                    <img
                      src={content.profilepic}
                      alt="profilepic"
                      className="stories-pic"
                    />
                  </div>
                  <div className="stories-account">
                    <p className="stories-name">{content.account}</p>
                    <p className="stories-des">{content.timeposted}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="recommend">
            <div className="recommend-head">
              <span className="recommend-head-title">회원님을 위한 추천</span>
              <span className="recommend-head-seeall">모두보기</span>
            </div>
            <div className="recommend-new-box">
              <div className="recommend-acct-box">
                <div className="recommend-new-pic" />
                <div className="recommend-new-account">
                  <p className="recommend-new-name">mercedesbenz</p>
                  <p className="recommend-new-des">회원님을 팔로우합니다.</p>
                </div>
              </div>
              <div className="recommend-new-add">팔로우</div>
            </div>
          </div>
          <div className="etc">
            <div>
              {MAIN_RIGHT_ETC.map(info => {
                return <span>{info.text}</span>;
              })}
            </div>

            <p>© 2022 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Mainkimkiyoon;
