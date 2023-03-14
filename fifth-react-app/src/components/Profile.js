import React from "react";
import profileImage from "../images/card-image.png";
import emailButton from "../images/mail.svg";
import linkedinButton from "../images/linkedin.svg";
import "../style.css";

function Profile() {
	const [count, setCount] = React.useState(0);

	function add() {
		setCount((prevCount) => prevCount + 1);
	}

	function substract() {
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<div className="profileImage">
			<img src={profileImage} alt="Profile image" />
			<div className="profileDetails">
				<h3>Laura Smith</h3>
				<h6>Frontend Developer</h6>
				<small>laurasmith.website</small>
			</div>
			<div className="profileButtons">
				<a href="#">
					<button className="button1">
						<img src={emailButton} alt="Email Button" />
						<span>Email</span>
					</button>
				</a>
				<a href="#">
					<button className="button2">
						<img src={linkedinButton} alt="Email Button" />
						<span>LinkedIn</span>
					</button>
				</a>
			</div>
			<div>
				<button onClick={add}>+</button>
				<p>{count}</p>
				<button onClick={substract}>-</button>
			</div>
		</div>
	);
}

export default Profile;
