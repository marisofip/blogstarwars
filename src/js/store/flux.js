const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://swapi.dev/api',
			characters: {},
			planets: {},
			starships: {},
			
			favorites: []
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
			
		}
	};
};

export default getState;
