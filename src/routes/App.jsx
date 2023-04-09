import React from "react";import Carousel from "react-elastic-carousel";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Diets from "../Components/Diets";
import SearchBar from "../Components/SearchBar";
import SearchBar2 from "../Components/SearchBar2";
import Results from "../Components/Results";
import Loader from "../Components/Loader";
import PaymentPlan from "../Components/PaymentPlan";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
import { breakPoints, dietDataEN, dietDataAL } from "../data/data";
import { useStateContext } from "../ContextProvider";
import { Outlet, Link } from "react-router-dom";

function App() {
	const { language, searchResults, isSearchBarOnTop, showLoader, error } = useStateContext();

	const dietArray =
		language === "EN"
			? dietDataEN.map((i, index) => <Diets key={index} title={i.title} cal={i.cal} img={i.img} />)
			: dietDataAL.map((i, index) => <Diets key={index} title={i.title} cal={i.cal} img={i.img} />);
	let result;
	if (searchResults) {
		result = searchResults.map((i) => (
			<Results
				key={i.id}
				title={i.title}
				img={i.images[2]}
				imgBackup={i.image}
				restaurantChain={i.restaurantChain}
				proteins={i.nutrition.protein}
				calories={i.nutrition.calories}
			/>
		));
	}

	return (
		<>
			<div>
				<Outlet />
			</div>
			<NavBar />
			<Hero />
			<p id="diets"></p>
			<h1 className="diet-title">{language === "EN" ? "Diets" : "Dieta"}</h1>
			<Carousel breakPoints={breakPoints} enableTilt={true} easing="ease">
				{dietArray}
			</Carousel>
			<section className="search-section">
				<div className="left">
					<h2>
						{language === "EN"
							? `Browse through a database full of delicious meals. Find information for over 115k meals including	ingredients, proteins, calories and fats.`
							: `Shfletoni një databazë plot të dhëna per ushqime të shijshme. Gjeni informacion për mbi 115 mijë vakte duke përfshirë
						përbërësit, proteinat, kaloritë dhe yndyrnat.`}
					</h2>
					<button className="sign-up">
						<Link to="/not-available">{language === "EN" ? "Get full access!" : "Fito akses të plotë"}</Link>
					</button>
				</div>
				<div className="right">
					{isSearchBarOnTop ? <SearchBar /> : <SearchBar2 />}
					{error ? (
						<div className="results-container">
							<h1 className="error">
								{language === "EN"
									? "Unfortunately, we might not have your desired food in our system."
									: "Fatkeqësisht, ne mund të mos kemi ushqimin tuaj të dëshiruar në sistemin tonë."}
							</h1>
						</div>
					) : (
						<div className="results-container">{showLoader ? <Loader /> : result}</div>
					)}
				</div>
			</section>
			<h1 className="payment-plan-title">{language === "EN" ? "Payment plans" : "Planet e pagesës"}</h1>
			<PaymentPlan />
			<div id="map"></div>
			<div className="map-title">
				{language === "EN"
					? "Find amazing restaurants and markets that work with us"
					: "Gjeni restorante dhe markete të mrekullueshme që punojnë me ne"}
			</div>
			<Map />
			<div className="wave"></div>
			<Footer />
		</>
	);
}

export default App;
