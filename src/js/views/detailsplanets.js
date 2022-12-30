import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
//import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";


export const DetailsPlanets = props => {
	const { store } = useContext(Context);
	return (
		<>
			{
				store.planets !== null &&
				store.planets.results.length > 1 &&
				store.planets.results.map((result, index) => {
					return (
						<div className="container border-0" key={index}>
							<div className="card mb-3 border-0 bg-transparent">
								<div className="row g-0">
									
									<div className="col-md-12">
										<div className="card-body text-warning">
											<h5 className="card-title">{result.name}</h5>
											<ul>
												<li className="card-text col-md-8">Diameter: {result.diameter}</li>
												<li className="card-text col-md-8">Potation_period: {result.rotation_period}</li>
												<li className="card-text col-md-8">Orbital_period {result.orbital_period}</li>
												<li className="card-text col-md-8">Gravity {result.gravity}</li>
												<li className="card-text col-md-8">Population: {result.population}</li>
												<li className="card-text col-md-8">Climate: {result.climate}</li>
												<li className="card-text col-md-8">Terrain: {result.terrain}</li>
												<li className="card-text col-md-8">Surface_water: {result.surface_water}</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			<Link to="/">
				<button className="btn btn-dark text-warning d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};