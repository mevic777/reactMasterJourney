import React from "react";
import facebookSVG from "../images/facebook.svg";
import githubSVG from "../images/github.svg";
import twitterSVG from "../images/twitter.svg";
import instagramSVG from "../images/instagram.svg";
import "../style.css";

function Footer() {
	return (
		<div className="footer">
			<img src={twitterSVG} alt="twitter" />
			<img src={facebookSVG} alt="facebook" />
			<img src={instagramSVG} alt="instagram" />
			<img src={githubSVG} alt="github" />
		</div>
	);
}

export default Footer;
