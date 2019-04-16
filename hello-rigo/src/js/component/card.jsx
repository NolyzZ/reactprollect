import React from "react";
import ReactDOM from "react-dom";

export const Card = () => {
	return (
		<div className="card text-center">
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlcT0kehlW2YtGLRPjIylGE7GwUAy7hg0rmB7z7CHN4OIzRRQkw"
				className="card-img-top"
				alt=""
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					>:) Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Sapiente esse necessitatibus neque.
				</p>

				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
