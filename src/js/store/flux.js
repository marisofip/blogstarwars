const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://swapi.dev/api',
			characters: {},
			planets: {},
			starships: {},
			favorites: [],
			mostrarFavoritos: true
		},
		actions: {
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						//console.log("DATA CHARACTERS", data)
						setStore({
							characters: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA PLANETS", data)
						setStore({
							planets: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromStarships: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/starships`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA STARSHIPS", data)
						setStore({
							starships: data
						})
					})
					.catch(error => console.log("error", error));
			},
			
			agregarFavoritos: id => {
				const store = getStore();
				//setStore({ favorites: [...store.favorites, store.characters[id - 1]] });
				setStore(store.favorites.push(id))},
			eliminarFavoritos: index => {
				const store = getStore();

				const eliminar = store.favorites.filter((el, i) => {
					return index !== i;
				});
				console.log(eliminar);
				setStore({ favorites: eliminar });
				console.log(store.favorites);
			},
			setMostrarFavoritos: e => {
				const store = getStore();
				setStore({ mostrarFavoritos: !store.mostrarFavoritos });
			}
			
		}
	};
}

export default getState;
