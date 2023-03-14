import React from "react";
import reactLogo from "../images/logo192.png";

function Header() {
	return (
		<div>
			<nav>
				<img src={reactLogo} alt="React logo image" />
				<h1>Header</h1>
				<ol>
					<li>Menu</li>
					<li>About</li>
					<li>Interesting facts</li>
				</ol>
			</nav>
		</div>
	);
}

export default Header;
