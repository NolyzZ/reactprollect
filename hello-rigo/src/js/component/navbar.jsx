import React from "react";
import ReactDOM from "react-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark sticky-top ">
			<a className="navbar-brand text-light offset-md-2">
				Start Boostrap
			</a>
			<form className="form-inline col-5">
				<a className="nav-link text-light" href="#">
					Home <span class="sr-only">(current)</span>
				</a>
				<a className="nav-link text-light" href="#">
					About
				</a>
				<a className="nav-link text-light" href="#">
					Services
				</a>
				<a className="nav-link text-light " href="#">
					Contact
				</a>
			</form>
		</nav>
	);
};
