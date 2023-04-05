import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<br/>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<br/>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
