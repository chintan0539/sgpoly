import React from "react";
import Main from "../../ReusableComponents/Main";
import "./Home.css";
import CSELogo from "./icons/CSE";
import MechLogo from "./icons/Mech";
import CivilLogo from "./icons/Civil";
import ENTCLogo from "./icons/ENTC";
import ElectLogo from "./icons/Elect";
import "./CSS/DeptCard.css";
import Counter from "./components/Counter";
import Recents from "./components/Recents";
import Carousel from "./components/Carousel";
import Imp from "./components/Imp";
// import Testimo from "./components/Testimo";

function Home() {
  return (
    <Main isSlideShow={true}>
      <div className=""></div>

      <Carousel />
      <Recents />
      <Counter />
      <Imp />

      <br />
      <br />
      <br />
      <br />
      <div className="container-sm text-center">
        <h1 className="text-dark" style={{ fontSize: 40 }}>
          COURSES
        </h1>

        <div className="row text-center d-flex justify-content-center cardsss">
          <div className="col-xl-3 col-sm-6 mb-5 cse-card shadow-lg m-2 rounded">
            <div className="rounded py-5 px-4 bg-transparent">
              <CSELogo className="mb-3 cse-logo" width="100px" />
              <h5 className="mb-0">Computer Science</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 mech-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <MechLogo
                className="mb-3 mech-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Mechanical</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 civil-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <CivilLogo
                className="mb-3 civil-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Civil</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 etc-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ENTCLogo className="mb-3 etc-logo" width="100px" height="80px" />
              <h5 className="mb-0">E &amp; TC</h5>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5 ele-card shadow-lg m-2">
            <div className="rounded py-5 px-4 bg-transparent">
              <ElectLogo
                className="mb-3 ele-logo"
                width="100px"
                height="80px"
              />
              <h5 className="mb-0">Electrical</h5>
            </div>
          </div>
        </div>
        <h1 className="text-dark" style={{ fontSize: 40 }}>
          ABOUT SGP
        </h1>
        <br />

        <div className="video-container">
          <iframe
            className="fram"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>

        {/* <Testimo /> */}
      </div>
    </Main>
  );
}

export default Home;
