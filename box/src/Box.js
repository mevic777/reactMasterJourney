import React from "react";

export default function Box(props) {
	// const [on, setOn] = React.useState(props.on);

	// function toogleColor() {
	// 	setOn((prevOn) => !prevOn);
	// }

	const styles = {
		backgroundColor: props.on ? "#222222" : "transparent",
	};

	return (
		<div
			style={styles}
			onClick={() => props.toggle(props.id)}
			className="box"
		></div>
	);
}
