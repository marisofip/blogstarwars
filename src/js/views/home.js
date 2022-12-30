import React from "react";
import "../../styles/home.css";
import Carousel from "../component/carousel";
import CardCharacters from "../component/cardscharacters";


export const HomeCharacters = () => (
	<>
	<div className="text-center mt-5">
		<h1 className="text-warning">STAR WARS BLOG</h1>
<Carousel/>
			</div>
			<div className="container-fluid">
			<div className="d-flex">
			<CardCharacters/>
			</div> </div>
			</>
);
