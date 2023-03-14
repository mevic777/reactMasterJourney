import React from "react";
import logo from "../images/airbnb.svg";
import "../style.css";

function Navbar() {
	return (
		<nav>
			<div className="logoNavbar">
				<img src={logo} alt="airbnb logo" />
			</div>
		</nav>
	);
}

export default Navbar;
