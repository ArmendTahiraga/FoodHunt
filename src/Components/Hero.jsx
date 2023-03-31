import React from "react";
import { useStateContext } from "../ContextProvider";

function Hero() {
	const { language } = useStateContext();

	return (
		<div className="hero">
			<h1 className="motto">
				<span className="health">{language === "EN" ? "Health" : "Shëndeti"}</span>
				{language === "EN" ? "is your" : "është"}
				{language === "AL" ? <br /> : ""}
				<span
					className="treasure"
					style={{
						display: language === "AL" ? "inline" : "block",
					}}
				>
					{language === "EN" ? "treasure" : "thesari "}
				</span>
				{language === "AL" ? "yt" : ""}
			</h1>
		</div>
	);
}

export default Hero;
