import React from "react";
import "../../styles/home.css";
import CardStarchips from "../component/cardsstarchips";
import Carousel from "../component/carousel";

 export const Starchips = () => {
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
          <CardStarchips/>
          </div>
        </div>
      </div>
    </>
  );
};

