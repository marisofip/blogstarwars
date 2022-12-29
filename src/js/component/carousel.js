import React from "react";
// import PropTypes from "prop-types";
import Starwars from "../../img/starwars.jpg";
import Starwars1 from "../../img/starwars1.jpg";
import Starwars2 from "../../img/starwars2.jpg";
import { Link } from "react-router-dom";


const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={Starwars1} className="mx-auto d-block w-50 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5 className="text-warning">Planets</h5>
              <p className="text-warning">Here will found the planets from starwars</p>
              <Link to="planets" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={Starwars} className="mx-auto d-block w-50 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5 className="text-warning">Starchips</h5>
              <p className="text-warning">Here will found the starchips from starwars</p>
              <Link to="Starchips" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Starwars2} className="mx-auto d-block w-50 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5 className="text-warning">Characters</h5>
              <p className="text-warning">Here will found the characters from starwars</p>
              <Link to="/" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
           </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};


export default Carousel;