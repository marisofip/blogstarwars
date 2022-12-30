import React from "react";
import "../../styles/home.css";
import CardPlanets from "../component/cardsplanets";
import Carousel from "../component/carousel";

export const Planets = () => {
  return (
    <>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex">
          <CardPlanets/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planets;