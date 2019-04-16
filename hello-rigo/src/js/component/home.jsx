import React from "react";
import { Navbar } from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.jsx";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text">
				<Navbar />
				<Jumbotron />
			</div>
		);
	}
}
