import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export function ContextProvider({ children }) {
	const [language, setLanguage] = useState("EN");
	const [query, setQuery] = useState("");
	const [navbarBackground, setNavbarBackground] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [isSearchBarOnTop, setIsSearchBarOnTop] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [error, setError] = useState(false);

	function changeBackground() {
		if (window.scrollY >= 60) {
			setNavbarBackground(true);
		} else {
			setNavbarBackground(false);
		}
	}

	window.addEventListener("scroll", changeBackground);

	function handleChange(event) {
		const { value } = event.target;
		setQuery(value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSearchResults([]);
		setShowLoader(true);
		setIsSearchBarOnTop(true);
		fetch(
			`https://api.apilayer.com/spoonacular/food/menuItems/search?query=${query}&apikey=CT76s3OJEKCmAZAEYtCi17A5UKiZ7vyA&addMenuItemInformation=true&number=3`
		)
			.then((response) => response.json())
			.then((result) => {
				setError(false);
				setShowLoader(false);
				if (result.totalMenuItems !== 0) {
					setSearchResults(result.menuItems);
				} else {
					throw new Error("An error has happened");
				}
			})
			.catch(() => setError(true));
		setQuery("");
	}

	function updateLanguage() {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	}

	return (
		<StateContext.Provider
			value={{
				language,
				updateLanguage,
				query,
				handleChange,
				handleSubmit,
				navbarBackground,
				searchResults,
				isSearchBarOnTop,
				showLoader,
				error,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}

export const useStateContext = () => useContext(StateContext);
