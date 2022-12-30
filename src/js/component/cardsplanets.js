import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planetas from "../../img/planetas.jpg"


const CardPlanets = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="col d-grid gap-5">
        {
          store.planets.results !== undefined ?
            (store.planets.results.map((result, index) => {
              return (
                <div className="card w-auto m-auto bg-secondary" key={index}>
                  <img src={planetas} className="card-img-top w-auto" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{result.name}</h5>
                    <p className="card-title"><strong>Terrain:</strong> {result.terrain}</p>
                    <p className="card-title"><strong>Climate:</strong> {result.climate}</p>
                    <div className="d-grid gap-2 d-flex" id="botones">
                    <Link to={`/detailsplanets/${result.name}`} className="btn btn-dark text-warning" onClick={() => actions.loadDataFromPlanets(result.url)} >
                      Read More
                    </Link>
                      <button
                        className="btn btn-warning me-md-2 justify-content-end"
                        type=""
                      ><AiFillHeart onClick={() => { actions.agregarFavoritos(result.name) }} /></button>
                    </div>
                  </div>
                </div>
              )
            })) : (null)
        }
      </div>
    </>
  );
};

export default CardPlanets;