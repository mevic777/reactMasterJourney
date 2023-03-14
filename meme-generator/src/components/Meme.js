import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
	// const [memeImage, setMemeImage] = React.useState(
	// 	"http://i.imgflip.com/1bij.jpg"
	// );

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImage, setAllMemeImage] = React.useState(memesData);

	function getMemeImage() {
		const memeArray = allMemeImage.data.memes;
		const randomNumber = Math.floor(Math.random() * memeArray.length);
		const url = memeArray[randomNumber].url;

		setMeme((prev) => {
			console.log("marius");
			return {
				...prev,
				randomImage: url,
			};
		});
	}

	return (
		<main>
			<form className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button onClick={getMemeImage} className="form--button">
					Get a new meme image 🖼
				</button>
				<img
					className="memeImage"
					src={meme.randomImage}
					alt={meme.randomImage}
				/>
			</form>
		</main>
	);
}
