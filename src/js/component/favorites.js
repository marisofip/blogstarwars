import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { FaTrashAlt } from 'react-icons/fa';

const Favorites = () => { 
	const { store, actions } = useContext(Context);
	const x = store.mostrarFavoritos;

	return (
	
		<div className="favorites">
			<span className="btn btn-secondary" id="dropdownMenuButton1"  type="button" onClick={() => actions.setMostrarFavoritos()}>
				Favorites {store.favorites.length}
			</span>
		
			<ul className={store.mostrarFavoritos ? "visible" : "oculto"}>
				{store.favorites.map((el, index) => {
					console.log(index)
					return (
						<li key={index}>
							{el}
							<i onClick={() => actions.eliminarFavoritos(index)} className="far fa-trash-alt" />
						</li>
					);
				})}
			</ul>
		</div>

	)
};

export default Favorites;