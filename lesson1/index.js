function Navbar() {
	return (
		<nav>
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was released 2013</li>
				<li>Marius bravo</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

const page = <h1>marius</h1>;

console.log(page);

ReactDOM.render(<Navbar />, document.getElementById("root"));
