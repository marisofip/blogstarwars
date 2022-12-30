import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const Favorites = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarFavoritos;

	return (
	
		<div className="favorites">
			<button className="btn btn-secondary dropdown-toggle "   onClick={() => actions.setMostrarFavoritos()}>
				Favorites {store.favorites.length}
			</button>
		
			<ul className={store.mostrarFavoritos ? "visible" : "oculto"}>
				{store.favorites.map((el, index) => {
					console.log(index)
					return (
						<div className="listado">
						<li key={index}>
							{el} {" "}
							<li onClick={() => actions.eliminarFavoritos(index)} className="far fa-trash-alt" />
						</li> </div>
					);
				})}
			</ul>
			</div>
		

	)
};

export default Favorites;