import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import el from "../../img/el.jpeg";
import ella from "../../img/ella.png";
import robot from "../../img/robot.jpg";

const CardCharacters = () => {
  const { store, actions } = useContext(Context);
  function Evaluarimagen(gender)  {
    let imagen = el;
    //alert(gender);
    if (gender == "female") {
       {imagen= ella}
    }
    else if (gender ==  "n/a" ) 
    {
        {imagen= robot}
    }
    return (imagen)
}
  
  return (
    <>
      <div className="col d-grid gap-5 ">
        {
          store.characters.results !== undefined ?
          (store.characters.results.map((result, index) =>    { 
            return (
              
              <div className="card w-25 m-auto bg-secondary" key={index}>
                <img src= {Evaluarimagen(result.gender)} className="card-img-top w-25" alt="..." />
                <div className="card-body">
                  <h1 className="card-title text-dark">{result.name}</h1>
                  <p className="card-title text-dark"><strong>Birth_year:</strong> {result.birth_year}</p>
                  <p className="card-title text-dark"><strong>Height:</strong> {result.height}</p>
                  <p className="card-title text-dark"><strong>Gender:</strong> {result.gender}</p>
                  <Link to={`/detailscharacters/${result.name}`} className="btn btn-warning" onClick={() => actions.loadDataFromCharacters(result.url)}>
                    Read More
                  </Link>
                  <div className="d-grid gap-2 d-flex justify-content-md-end">
                    <button
                      className="btn btn-outline-warning me-md-2"
                      type=""
                    ><AiFillHeart onClick={() => { actions.addFavorite(result.name) }}/></button>
                  </div>
                </div>
              </div>
            )
          })): (null)
        }
      </div>
    </>
  );
};

export default CardCharacters;