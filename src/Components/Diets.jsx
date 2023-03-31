import React from "react";function Diets(props) {
	return (
		<div className="diet">
			<img src={props.img} alt="" className="background" />
			<div>
				<h2 className="title">{props.title}</h2>
				<p className="calories">{props.cal}</p>
				<button className="get-diet">Get</button>
			</div>
		</div>
	);
}

export default Diets;
