import React, { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();

export function ContextProvider({ children }) {
	const [language, setLanguage] = useState("EN");
	const [query, setQuery] = useState("");
	const [navbarBackground, setNavbarBackground] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [isSearchBarOnTop, setIsSearchBarOnTop] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [error, setError] = useState(false);
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({ lat: 42.06492, lng: 19.511787 });
	const [bounds, setBounds] = useState({
		northEast: { lat: 42.08522678162342, lng: 19.53342657165527 },
		southWest: { lat: 42.05336922135908, lng: 19.473173428344722 },
	});
	const [signUpDetails, setSignUpDetails] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [accountDetails, setAccountDetails] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [screenWidth, setScreenWidth] = useState(screen.width);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
	const [haveResult, setHaveResult] = useState(false);
	const [placeholder, setPlaceholder] = useState("");
	const dropIn = {
		hidden: {
			top: "-50%",
			opacity: 0,
		},
		visible: {
			top: "50%",
			opacity: 1,
			transition: {
				duration: 0.5,
				type: "spring",
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			top: "-50%",
			opacity: 0,
		},
	};

	function handleHamburgerClick() {
		setIsHamburgerOpen((prevIsHamburgerOpen) => !prevIsHamburgerOpen);
	}

	window.addEventListener("resize", () => {
		setScreenWidth(screen.width);
	});

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("account"))) {
			setAccountDetails(JSON.parse(localStorage.getItem("account")));
			setIsLoggedIn(true);
		}
	}, []);

	function handleSignUp() {
		if (signUpDetails.name != "" && signUpDetails.email != "" && signUpDetails.password != "") {
			localStorage.setItem("account", JSON.stringify(signUpDetails));
			setAccountDetails(JSON.parse(localStorage.getItem("account")));
			setIsLoggedIn(true);
		}
	}
	function getPlacesData(southWest, northEast) {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_TRAVEL_API_KEY,
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
			},
		};

		fetch(
			`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${southWest.lat}&tr_latitude=${northEast.lat}&bl_longitude=${southWest.lng}&tr_longitude=${northEast.lng}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				let finalResponse = [];
				for (let i = 0; i < response.data.length; i++) {
					if (response.data[i].name === "Pasta te Zenga") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Bar Restaurant Elita Shkoder") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Puri") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Tradita Geg & Tosk") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Vila Bekteshi") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Rozafa Fish Seafood Restaurant") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Proper Pizza Shkoder") {
						finalResponse.push(response.data[i]);
					} else if (response.data[i].name === "Bar Restorant ARBRI") {
						finalResponse.push(response.data[i]);
					}
				}
				setPlaces(finalResponse);
			})
			.catch((err) => console.error(err));
	}
	useEffect(() => {
		// getPlacesData(bounds.southWest, bounds.northEast);
	}, []);

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
		setPlaceholder(query);
		if (screenWidth <= 768) {
			setHaveResult(true);
		}
		setShowLoader(true);
		setIsSearchBarOnTop(true);
		fetch(
			`https://api.apilayer.com/spoonacular/food/menuItems/search?query=${query}&apikey=${
				import.meta.env.VITE_SPOONACULAR_FOOD_API_KEY
			}&addMenuItemInformation=true&number=${screenWidth <= 768 ? 1 : 10}`
		)
			.then((response) => response.json())
			.then((result) => {
				setError(false);
				setShowLoader(false);
				if (result.totalMenuItems !== 0) {
					setSearchResults(() => {
						if (screenWidth > 768) {
							let res = [];
							for (let i = 0; i < result.menuItems.length; i++) {
								if (i != 0) {
									if (result.menuItems[i].restaurantChain != result.menuItems[i - 1].restaurantChain) {
										res.push(result.menuItems[i]);
									}
								}
							}
							return res.slice(0, 3);
						} else {
							return result.menuItems;
						}
					});
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
				handleSignUp,
				setSignUpDetails,
				isLoggedIn,
				accountDetails,
				screenWidth,
				isHamburgerOpen,
				handleHamburgerClick,
				haveResult,
				setHaveResult,
				placeholder,
				dropIn,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}

export const useStateContext = () => useContext(StateContext);
