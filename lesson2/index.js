function Header() {
	return (
		<nav>
			<h1>I am a developer</h1>
			<ol>
				<li>Menu</li>
				<li>About me</li>
				<li>My projects</li>
			</ol>
		</nav>
	);
}

function MainContainer() {
	return (
		<div>
			<h1>REACT Dev</h1>
			<ol>
				<li>It's cool</li>
				<li>It's declarative</li>
				<li>It's stable</li>
			</ol>
		</div>
	);
}

function Footer() {
	return (
		<div>
			<h1>2022 CopyRight Covali Marius</h1>
		</div>
	);
}

function Component() {
	return (
		<div>
			<Header />
			<MainContainer />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Component />, document.getElementById("root"));
