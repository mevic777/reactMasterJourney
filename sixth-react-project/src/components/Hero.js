import React from "react";
import gridBackground from "../images/grid-backgorund.png";

function Hero() {
	return (
		<div className="hero">
			<img src={gridBackground} alt="gridBackground" />
			<h1>Online Experiences</h1>
			<div className="paragraph">
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
}

export default Hero;
