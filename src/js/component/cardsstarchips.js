import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import nave from "../../img/nave.jpg"

const CardStarchips = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="col d-grid gap-5">
        {
          store.starships.results !== undefined ?
         ( store.starships.results.map((result, index) => {
            return (
              <div className="card w-auto m-auto bg-secondary" key={index}>
                <img src={nave} className="card-img-top w-auto" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <p className="card-title"><strong>Model:</strong> {result.model}</p>
                  <p className="card-title"><strong>Starship_class:</strong> {result.starship_class}</p>
                  <div className="d-grid gap-2 d-flex" id="botones">
                  <Link to={`/detailsstarchips/${result.name}`}className="btn btn-dark text-warning" onClick={() => actions.loadDataFromStarships(result.url)}>
                    Read More
                  </Link>
                 
                    <button
                      className="btn btn-warning me-md-2 justify-content-end"
                      type=""
                    ><AiFillHeart onClick={() => { actions.agregarFavoritos(result.name) }}/></button>
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


export default CardStarchips;