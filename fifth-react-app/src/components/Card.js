import React from "react";
import Profile from "./Profile";
import Description from "./Description";
import Footer from "./Footer";
import "../style.css";

function Card() {
	return (
		<div className="card">
			<Profile></Profile>
			<Description></Description>
			<Footer></Footer>
		</div>
	);
}

export default Card;
