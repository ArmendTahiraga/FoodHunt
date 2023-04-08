import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

function NotYetAvailable() {
	const { language } = useStateContext();

	return (
		<div className="not-available-container">
			<Link to="/" className="close">
				<span className="material-symbols-outlined">close</span>
			</Link>
			<h2 className="not-available-title">
				{language === "EN"
					? "Sorry, but this feature is not yet available."
					: "Na vjen keq, por kjo veçori nuk është ende e disponueshme."}
			</h2>
			<Link to="/" className="not-available-button">
				{language === "EN" ? "Close" : "Mbyll"}
			</Link>
		</div>
	);
}

export default NotYetAvailable;
