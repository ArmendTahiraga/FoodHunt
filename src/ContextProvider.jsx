import React, { createContext, useContext, useState, useEffect } from "react";import axios from "axios";
const StateContext = createContext();

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export function ContextProvider({ children }) {
	const [language, setLanguage] = useState("EN");
	const [query, setQuery] = useState("");
	const [navbarBackground, setNavbarBackground] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [isSearchBarOnTop, setIsSearchBarOnTop] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [error, setError] = useState(false);
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});
	const [isReady, setIsReady] = useState(false);

	async function getPlacesData(southWest, northEast) {
		try {
			const options = {
				method: "GET",
				params: {
					bl_latitude: southWest.lat,
					tr_latitude: northEast.lat,
					bl_longitude: southWest.lng,
					tr_longitude: northEast.lng,
				},
				headers: {
					"X-RapidAPI-Key": "3e00f26979msh62d2ccabc93f160p1e650ajsn8261f9fd6ccf",
					"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				},
			};

			const {
				data: { data },
			} = await axios.get(url, options);

			return data;
		} catch (error) {}
	}

	useEffect(() => {
		setCoordinates({ lat: 42.0693, lng: 19.5033 });
	}, []);

	useEffect(() => {
		getPlacesData(bounds.southWest, bounds.northEast).then((data) => {
			setIsReady(true);
			setPlaces(data);
		});
	}, [coordinates, bounds]);

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
				coordinates,
				setCoordinates,
				setBounds,
				places,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}

export const useStateContext = () => useContext(StateContext);
