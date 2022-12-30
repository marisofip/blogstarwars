import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import {HomeCharacters}  from "./views/home";
import {Planets}  from "./views/planets";
import {Starchips} from "./views/starchips";
import {DetailsCharacters} from "./views/detailscharacters";
import {DetailsPlanets} from "./views/detailsplanets";
import {DetailsStarchips} from "./views/detailsstarchips";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					
					<Routes>
					<Route path="/" element={< HomeCharacters/>}/>
					<Route path="/planets" element={< Planets/>}/>
					<Route path="/starchips" element={< Starchips/>}/>
					<Route path="/detailscharacters/:id" element={< DetailsCharacters/>}/>
					<Route path="/detailsplanets/:id" element={< DetailsPlanets/>}/>
					<Route path="/detailsstarchips/:id" element={< DetailsStarchips/>}/>	
					</Routes>
							
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
