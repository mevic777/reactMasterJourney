import React from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./App.css";

export default function App() {
	const [squares, setSquares] = React.useState(boxes);

	// This is the first method that came to mind

	// function toggle(id) {
	// 	setSquares((prevSquare) => {
	// 		const newSquares = [];

	// 		for (let i = 0; i < prevSquare.length; i++) {
	// 			let currentSquare = prevSquare[i];

	// 			if (currentSquare.id === id) {
	// 				let updatedSquare = {
	// 					...currentSquare,
	// 					on: !currentSquare.on,
	// 				};

	// 				newSquares.push(updatedSquare);
	// 			} else {
	// 				newSquares.push(currentSquare);
	// 			}
	// 		}

	// 		return newSquares;
	// 	});
	// }

	function toggle(id) {
		setSquares((prevSquares) => {
			return prevSquares.map((square) => {
				return square.id === id ? { ...square, on: !square.on } : square;
			});
		});
	}

	const squareElements = squares.map((square) => (
		<Box key={square.id} on={square.on} id={square.id} toggle={toggle} />
	));

	return <main>{squareElements}</main>;
}
