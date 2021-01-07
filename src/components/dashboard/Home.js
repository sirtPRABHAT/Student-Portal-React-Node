import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <h1>Welcome home!</h1>
      <div className="homepage__container">
        <div className="homepage__cardsection">
          <div className="homepage__card">
            <div className="homepagecard__container">
              <div className="homepagecard__title">Jobs For Me</div>
              <div
                className="homepagecard__image"
                style={{
                  backgroundImage: "url('/images/assets/description.svg')",
                }}
              ></div>
            </div>
          </div>
          <div className="homepage__card">
            <div className="homepagecard__container">
              <div className="homepagecard__title">My Learning</div>
              <div
                className="homepagecard__image"
                style={{
                  backgroundImage: "url('/images/assets/description.svg')",
                }}
              ></div>
            </div>
          </div>
          <div className="homepage__card">
            <div className="homepagecard__container">
              <div className="homepagecard__title">Stories For Me</div>
              <div
                className="homepagecard__image"
                style={{
                  backgroundImage: "url('/images/assets/description.svg')",
                }}
              ></div>
            </div>
          </div>
          <div className="homepage__card">
            <div className="homepagecard__container">
              <div className="homepagecard__title">My Community</div>
              <div
                className="homepagecard__image"
                style={{
                  backgroundImage: "url('/images/assets/description.svg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
