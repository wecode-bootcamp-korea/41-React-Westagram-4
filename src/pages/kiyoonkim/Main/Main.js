import React from "react";
import Nav from "../../../components/Nav/Nav";
import "./Main.scss";
import Feeds from "./Feeds";
import { MAIN_RIGHT_ETC } from "./MainUI";

function Mainkimkiyoon() {
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
            <div className="stories-1-box">
              <div className="stories-1-pic" />
              <div className="stories-1-account">
                <p className="stories-1-name">bmw</p>
                <p className="stories-1-des">15분전</p>
              </div>
            </div>
            <div className="stories-2-box">
              <div className="stories-2-pic" />
              <div className="stories-2-account">
                <p className="stories-2-name">teslamotors</p>
                <p className="stories-2-des">30분전</p>
              </div>
            </div>
            <div className="stories-3-box">
              <div className="stories-3-pic" />
              <div className="stories-3-account">
                <p className="stories-3-name">ferrari</p>
                <p className="stories-3-des">40분전</p>
              </div>
            </div>
            <div className="stories-4-box">
              <div className="stories-4-pic" />
              <div className="stories-4-account">
                <p className="stories-4-name">astonmartinlagonda</p>
                <p className="stories-4-des">45분전</p>
              </div>
            </div>
            <div className="stories-5-box">
              <div className="stories-5-pic" />
              <div className="stories-5-account">
                <p className="stories-5-name">lamborghini</p>
                <p className="stories-5-des">50분전</p>
              </div>
            </div>
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
