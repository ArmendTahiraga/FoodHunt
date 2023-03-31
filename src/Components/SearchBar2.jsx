import React from "react";import { motion } from "framer-motion";
import { useStateContext } from "../ContextProvider";

function SearchBar2() {
	const { language, query, handleChange, handleSubmit } = useStateContext();

	return (
		<motion.div className="search-bar" initial={{ transform: "translateY(160px)" }}>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					className="query"
					placeholder={language === "EN" ? "Food" : "Ushqime"}
					onChange={handleChange}
					value={query}
				/>
				<button className="search-button">{language === "EN" ? "Search" : "Kërko"}</button>
			</form>
		</motion.div>
	);
}

export default SearchBar2;
