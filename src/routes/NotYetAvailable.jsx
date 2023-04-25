import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import { motion } from "framer-motion";

function NotYetAvailable() {
	const { language, dropIn } = useStateContext();

	return (
		<motion.div className="not-available-container module" variants={dropIn} initial="hidden" animate="visible" exit="exit">
			<Link to="/" className="close">
				<span className="material-symbols-outlined">close</span>
			</Link>
			<h2 className="not-available-title">
				{language === "EN"
					? "Sorry, but this feature is not yet available."
					: "Na vjen keq, por kjo veçori nuk është ende e disponueshme."}
			</h2>
			<Link to="/" className="not-available-button" style={language === "AL" ? { marginTop: "40px" } : {}}>
				{language === "EN" ? "Close" : "Mbyll"}
			</Link>
		</motion.div>
	);
}

export default NotYetAvailable;
