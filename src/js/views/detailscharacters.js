import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
//import starwars from "../../img/star-wars-logo.jpg";

export const DetailsCharacters = props => {
	const { store } = useContext(Context);
	return (
		<>
			{
				store.characters !== null &&
				store.characters.results.length > 1 &&
				store.characters.results.map((result, index) => {
					return (
						<div className="container border-0 " key={index}>
							<div className="card mb-3 border-0">
								<div className="row g-0">
									
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{result.name}</h5>
											<ul>
												<li className="card-text col-md-8">Height: {result.height}</li>
												<li className="card-text col-md-8">Mass: {result.mass}</li>
												<li className="card-text col-md-8">Hair_color {result.hair_color}</li>
												<li className="card-text col-md-8">Skin_color {result.skin_colo}</li>
												<li className="card-text col-md-8">Eye_color: {result.eye_color}</li>
												<li className="card-text col-md-8">Birth_year: {result.birth_year}</li>
												<li className="card-text col-md-8">Gender: {result.gender}</li>
												
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

    )}	
								