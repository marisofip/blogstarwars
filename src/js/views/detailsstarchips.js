import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
//import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";


export const DetailsStarchips = props => {
	const { store } = useContext(Context);
	return (
		<>
			{
				store.starships !== null &&
				store.starships.results.length > 1 &&
				store.starships.results.map((result, index) => {
					return (
						<div className="container d-flex  w-auto " key={index}>
							<div className="card mb-3 bg-transparent">
								<div className="row g-0">
									
									<div className="col-md-12">
										<div className="card-body text-warning ">
											<h5 className="card-title">{result.name}</h5>
											<ul>
												<li className="card-text col-md-8">model: {result.model}</li>
												<li className="card-text col-md-8">starship_class: {result.starship_class}</li>
												<li className="card-text col-md-8">manufacturer: {result.manufacturer}</li>
												<li className="card-text col-md-8">cost_in_credits: {result.cost_in_credits}</li>
												<li className="card-text col-md-8">length: {result.length}</li>
												<li className="card-text col-md-8">crew: {result.crew}</li>
												<li className="card-text col-md-8">passengers: {result.passengers}</li>
												<li className="card-text col-md-8">MGLT: {result.MGLT}</li>
												<li className="card-text col-md-8">cargo_capacity: {result.cargo_capacity}</li>
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
				<button className="btn btn-dark text-warning  d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
export default DetailsStarchips