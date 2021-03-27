import React from "react";

//imports for carousel

import "react-multi-carousel/lib/styles.css";

import "./carousel.css";

//importing firebase
import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";

// TODO:Delete This Component
const Carousel = () => {
  const [data, setData] = useState([]);

  const getCaro = async () => {
    let dataRef = firebase.database().ref("carousel");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        console.log(result);
        setData(result);
      }
    });
  };

  useEffect(() => {
    getCaro();
  }, []);

  return (
    <div className="container css-caro">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          {data.map((d, i) => {
            if (i == 0) {
              return (
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={data[0].URL}
                    alt={data[0].ImageName}
                  />
                </div>
              );
            }
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={d.URL} alt={d.ImageName} />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
