const nums = [1, 2, 3, 4, 5];

const squared = nums.map((item) => {
	let squareNumber = item * item;
	console.log(squareNumber);
});

const names = ["alice", "bob", "charlie", "danielle"];

const capitalizedNames = names.map((item) => {
	const name = item[0].toUpperCase() + item.slice(1);

	console.log(name);
});

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const newPokemons = pokemon.map((item) => {
	return `<p>${item}</p>`;
});

console.log(newPokemons);
