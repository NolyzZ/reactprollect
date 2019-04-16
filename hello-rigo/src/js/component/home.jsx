import React from "react";
import { Card } from "./card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Footer } from "./footer.jsx";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<div className="d-flex flex-nowrap bd-highlight">
					<div class="order-4 p-2 bd-highlight">
						<Card />
					</div>
					<div className="order-3 p-2 bd-highlight">
						<Card />
					</div>
					<div className="order-2 p-2 bd-highlight">
						<Card />
					</div>
					<div className="order-1 p-2 bd-highlight">
						<Card />
					</div>
				</div>
			</div>
		);
	}
}
