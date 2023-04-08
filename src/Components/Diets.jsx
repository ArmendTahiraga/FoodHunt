import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

function Diets(props) {
	const { language } = useStateContext();
	return (
		<div className="diet">
			<img src={props.img} alt="" className="background" />
			<div>
				<h2 className="title">{props.title}</h2>
				<p className="calories">{props.cal}</p>
				<button className="get-diet">
					<Link to="/not-available">{language === "EN" ? "Get" : "Merr"}</Link>
				</button>
			</div>
		</div>
	);
}

export default Diets;
