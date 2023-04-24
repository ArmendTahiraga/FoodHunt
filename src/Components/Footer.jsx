import React from "react";
import logo from "../pictures/LogoBardh60.svg";
import instagram from "../pictures/instagram.svg";
import facebook from "../pictures/facebook.svg";
import tiktok from "../pictures/tiktok.svg";
import { useStateContext } from "../ContextProvider";
import { Link, useLocation } from "react-router-dom";

function Footer() {
	const { language, places } = useStateContext();
	const location = useLocation();

	const placeNamesArray = places.map((place, index) => (
		<p className="partner" key={index}>
			{place.name}
		</p>
	));

	return (
		<div className="footer">
			<div className="logo-container">
				<img src={logo} alt="" className="logo" />
			</div>
			<div className="footer-info">
				<div className="info-section nav-item-container">
					{location.pathname === "/" ? (
						<a href="#" className="info-section-nav-item">
							{language === "EN" ? "Home" : "Shtëpi"}
						</a>
					) : (
						<Link to="/" className="info-section-nav-item">
							{language === "EN" ? "Home" : "Shtëpi"}
						</Link>
					)}
					{location.pathname === "/about" ? (
						<a href="#" className="info-section-nav-item">
							{language === "EN" ? "About" : "Rreth"}
						</a>
					) : (
						<Link to="/about" className="info-section-nav-item">
							{language === "EN" ? "About" : "Rreth"}
						</Link>
					)}
					<div className="nextRow">
						<a href="/#diets" className="info-section-nav-item">
							{language === "EN" ? "Diets" : "Dietat"}
						</a>
						<a href="/#map" className="info-section-nav-item">
							{language === "EN" ? "Map" : "Harta"}
						</a>
					</div>
				</div>
				<div className="info-section partners-container">
					<h3 className="partners-title">{language === "EN" ? "Partners:" : "Partnerët:"}</h3>
					<div className="partners">
						<div className="left">{placeNamesArray.slice(0, 4)}</div>
						<div className="right">{placeNamesArray.slice(4)}</div>
					</div>
				</div>
				<div className="info-section icons-container">
					<a href="https://instagram.com/foodhunt.al" target="_blank">
						<img src={instagram} alt="instagram" className="icon" />
					</a>

					<a href="https://facebook.com/profile.php?id=100091625528820&mibextid=LQQJ4d" target="_blank">
						<img src={facebook} alt="facebook" className="icon" />
					</a>

					<a href="https://tiktok.com/@foodhunt.al" target="_blank">
						<img src={tiktok} alt="tiktok" className="icon" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
