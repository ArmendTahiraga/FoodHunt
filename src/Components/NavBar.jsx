import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../pictures/LogoBardh60.svg";
import { useStateContext } from "../ContextProvider";

function NavBar() {
	const { language, updateLanguage, navbarBackground } = useStateContext();
	const location = useLocation();

	return (
		<div className={navbarBackground ? "nav-container active" : "nav-container"}>
			<div className="nav">
				<div className="left">
					<Link to={"/"}>
						<img src={logo} alt="Food Hunt" className="logo" />
					</Link>
				</div>
				<div className="right">
					<Link to={"/"}>
						<h2
							className="nav-item home"
							style={{
								color: location.pathname === "/" ? "#65ff62" : "#fff",
							}}
						>
							{language === "EN" ? "Home" : "Shtëpi"}
						</h2>
					</Link>
					<a href="#diets" className="nav-item linkToSection">
						{language === "EN" ? "Diets" : "Dietat"}
					</a>

					<button className="login">{language === "EN" ? "Login" : "Hyr"}</button>
					<button className="sign-up">{language === "EN" ? "Sign Up" : "Regjistrohu"}</button>
					<h4
						className="language"
						onClick={() => updateLanguage()}
						style={{
							marginRight: language === "AL" ? "2px" : 0,
						}}
					>
						{language}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
