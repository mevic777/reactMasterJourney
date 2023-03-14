import React from "react";
import phoneCall from "../images/phone-call.png";
import email from "../images/email.png";
import "../style.css";

function Contact(props) {
	return (
		<div className="contact-card">
			<img src={props.img} alt={props.img} />
			<h3>{props.name}</h3>
			<div className="info-group">
				<img src={phoneCall} alt={props.img} />
				<p>{props.phone}</p>
			</div>
			<div className="info-group">
				<img src={email} alt={props.img} />
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Contact;
