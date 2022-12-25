import React from "react";
import "./Main.scss";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import MyProfile from "./components/MyProfile/MyProfile";

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
              <div className="story-container">
                <div className="space-between font-weight-600">
                  <span className="aacy">스토리</span>
                  <span>모두 보기</span>
                </div>

                {/* <!-- 스토리 리스트 --> */}
                <div className="story-list scroll-hide">
                  <div className="new-story-list-wrap">
                    <div className="new-story-img-box">
                      <img id="new-story-img" alt="" />
                    </div>
                    <div className="nickname-time">
                      <div className="txt-line font-weight-600">Gussie</div>
                      <div className="aacy">15분 전</div>
                    </div>
                  </div>
                  <div className="new-story-list-wrap">
                    <div className="new-story-img-box">
                      <img
                        className="new-story-img"
                        src="https://images.unsplash.com/photo-1671311576479-21411c2ddfb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt=""
                      />
                    </div>
                    <div className="nickname-time">
                      <div className="txt-line font-weight-600">Robert</div>
                      <div className="aacy">15분 전</div>
                    </div>
                  </div>
                  <div className="new-story-list-wrap">
                    <div className="new-story-img-box">
                      <img
                        className="new-story-img"
                        src="https://images.unsplash.com/photo-1671129299578-6a364fb3acd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                        alt=""
                      />
                    </div>
                    <div className="nickname-time">
                      <div className="txt-line font-weight-600">Gunnar</div>
                      <div className="aacy">15분 전</div>
                    </div>
                  </div>
                  <div className="new-story-list-wrap">
                    <div className="new-story-img-box">
                      <img
                        className="new-story-img"
                        src="https://images.unsplash.com/photo-1671212041181-b54a69ea66e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                        alt=""
                      />
                    </div>
                    <div className="nickname-time">
                      <div className="txt-line font-weight-600">Delores</div>
                      <div className="aacy">15분 전</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommended-container">
                <div className="space-between font-weight-600">
                  <span className="aacy">회원님을 위한 추천</span>
                  <span>모두 보기</span>
                </div>

                {/* <!-- 추천 리스트 --> */}
                <div className="recommended-list scroll-hide">
                  <div className="space-between">
                    <div className="new-story-list-wrap">
                      <div className="new-recommended-img-box">
                        <img
                          className="new-story-img"
                          src="https://images.unsplash.com/photo-1603258849049-b89ebe66c994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                          alt=""
                        />
                      </div>
                      <div className="nickname-time">
                        <div className="txt-line font-weight-600">Yasmeen</div>
                        <div className="txt-line aacy">Qui asperiores sed.</div>
                      </div>
                    </div>
                    <div className="font-bluefont-weight-600">팔로우</div>
                  </div>
                  <div className="space-between">
                    <div className="new-story-list-wrap">
                      <div className="new-recommended-img-box">
                        <img
                          className="new-story-img"
                          src="https://images.unsplash.com/photo-1671287415149-e68a44697373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                          alt=""
                        />
                      </div>
                      <div className="nickname-time">
                        <div className="txt-line font-weight-600">Alene</div>
                        <div className="txt-line aacy">
                          Magni deleniti ad nihil repellat.
                        </div>
                      </div>
                    </div>
                    <div className="font-blue font-weight-600">팔로우</div>
                  </div>
                  <div className="space-between">
                    <div className="new-story-list-wrap">
                      <div className="new-recommended-img-box">
                        <img
                          className="new-story-img"
                          src="https://images.unsplash.com/photo-1671212041183-305f7f92ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                          alt=""
                        />
                      </div>
                      <div className="nickname-time">
                        <div className="txt-line font-weight-600">Chance</div>
                        <div className="txt-line aacy">
                          Ea sapiente fugit ipsum.
                        </div>
                      </div>
                    </div>
                    <div className="font-blue font-weight-600">팔로우</div>
                  </div>
                  <div className="space-between">
                    <div className="new-story-list-wrap">
                      <div className="new-recommended-img-box">
                        <img
                          className="new-story-img"
                          src="https://images.unsplash.com/photo-1671229381042-0d157ad8f459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
                          alt=""
                        />
                      </div>
                      <div className="nickname-time">
                        <div className="txt-line font-weight-600">Alexis</div>
                        <div className="txt-line aacy">
                          Eaque modi cumque delectus et enim.
                        </div>
                      </div>
                    </div>
                    <div className="font-blue font-weight-600">팔로우</div>
                  </div>
                  <div className="space-between">
                    <div className="new-story-list-wrap">
                      <div className="new-recommended-img-box">
                        <img
                          alt=""
                          className="new-story-img"
                          src="https://images.unsplash.com/photo-1671212041181-bf00314b1864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        />
                      </div>
                      <div className="nickname-time">
                        <div className="txt-line font-weight-600">Danielle</div>
                        <div className="txt-line aacy">
                          Nobis nostrum quia minus ut ab esse.
                        </div>
                      </div>
                    </div>
                    <div className="font-blue font-weight-600">팔로우</div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
