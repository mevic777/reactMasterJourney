import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import mountainBike from "./images/mountain-bike 1.png";
import weddingPhotography from "./images/wedding-photography 1.png";
import image12 from "./images/image 12.png";
import data from "./data";

function App() {
	const cardsInformation = data.map((itemProp) => {
		return <Card {...itemProp} key={itemProp.id} />;
	});

	return (
		<div className="App">
			<Navbar></Navbar>
			<Hero></Hero>
			{cardsInformation}
		</div>
	);
}

export default App;

/*

Props -> help us to create reusable and composable react components
React components -> create components from array of data, allow us to create designs

*/
