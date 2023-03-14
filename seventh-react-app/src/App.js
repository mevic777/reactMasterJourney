import React from "react";
import Contact from "./components/Contact";
import cat1 from "./images/maine-coon-1.jpg";
import cat2 from "./images/maine-coon-2.jpg";
import cat3 from "./images/maine-coon-3.jpg";

function App() {
	return (
		<div className="App">
			<Contact
				img={cat1}
				name="Mr. Whiskerson"
				phone="(212) 555-2345"
				email="fluff@me.com"
			/>
			<Contact
				img={cat2}
				name="Mr. Fluffy"
				phone="(212) 555-2345"
				email="fluff@me.com"
			/>
			<Contact
				img={cat3}
				name="Ms. & Mr. Benisimo"
				phone="(212) 555-2345"
				email="fluff@me.com"
			/>
		</div>
	);
}

export default App;
