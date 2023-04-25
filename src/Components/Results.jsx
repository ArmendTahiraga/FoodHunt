import React from "react";
import { useStateContext } from "../ContextProvider";
function Results({ img, imgBackup, title, restaurantChain, proteins, calories }) {
	const { language } = useStateContext();
	return (
		<div className="result">
			<img src={img ? img : imgBackup} alt="" className="result-img" />
			<div className="result-info">
				<h2 className="result-title">{title}</h2>
				<p className="result-chain">
					<span className="material-symbols-outlined">location_on</span>
					{restaurantChain}
				</p>
			</div>
			<div className="nutrition">
				<p className="result-calories">
					{language === "EN" ? "Calories:" : "Kaloritë: "} {calories}
				</p>
				<p className="result-proteins">
					{language === "EN" ? "Proteins:" : "Proteinat: "} {proteins}
				</p>
			</div>
		</div>
	);
}

export default Results;
