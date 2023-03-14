import React from "react";
import starImage from "../images/star.png";

function Card(props) {
	return (
		<div>
			<div className="cardImage">
				<img src={`../images/${props.coverImg}`} alt="image12" />
				<div className="cardStatus">
					<p>SOLD OUT</p>
				</div>
			</div>
			<div className="cardReview">
				<img src={starImage} alt="starImage" />
				<p>
					{props.stats.rating} <span>(6) . USA</span>
				</p>
			</div>
			<div>
				<p>{props.description}</p>
			</div>
			<div className="cardPrice">
				<p>
					<span>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}

export default Card;
