import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import logo from "../pictures/LogoBardh60.svg";

function NavBar() {
	const {
		language,
		updateLanguage,
		navbarBackground,
		isLoggedIn,
		accountDetails,
		screenWidth,
		isHamburgerOpen,
		handleHamburgerClick,
	} = useStateContext();
	const location = useLocation();
	console.log(location.pathname);

	return (
		<div className={navbarBackground ? "nav-container active" : "nav-container"}>
			<div className="nav">
				<div className="left">
					{location.pathname === "/" ? (
						<a href="#">
							<img src={logo} alt="Food Hunt" className="logo" />
						</a>
					) : (
						<Link to={"/"}>
							<img src={logo} alt="Food Hunt" className="logo" />
						</Link>
					)}
				</div>
				{screenWidth <= 768 ? (
					<div className="right">
						<div onClick={handleHamburgerClick} className={isHamburgerOpen ? "hamburger open" : "hamburger"}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<div className={isHamburgerOpen ? "menu visible" : "menu hidden"}>
							<div className="menu-item-container">
								{location.pathname === "/" ? (
									<a href="#" className="link" style={{ height: "26px" }} onClick={handleHamburgerClick}>
										<h2
											className="nav-item home"
											style={{
												color:
													location.pathname === "/" ||
													location.pathname === "/sign-up" ||
													location.pathname === "/not-available"
														? "#65ff62"
														: "#fff",
											}}
										>
											{language === "EN" ? "Home" : "Shtëpi"}
										</h2>
									</a>
								) : (
									<Link to={"/"} className="link" style={{ height: "26px" }} onClick={handleHamburgerClick}>
										<h2
											className="nav-item home"
											style={{
												color:
													location.pathname === "/" ||
													location.pathname === "/sign-up" ||
													location.pathname === "/not-available"
														? "#65ff62"
														: "#fff",
											}}
										>
											{language === "EN" ? "Home" : "Shtëpi"}
										</h2>
									</Link>
								)}
								{location.pathname === "/about" ? (
									<a href="#" style={{ height: "26px" }} onClick={handleHamburgerClick}>
										<h2
											className="nav-item"
											style={{
												color:
													location.pathname === "/about" ||
													location.pathname === "/about/sign-up" ||
													location.pathname === "/about/not-available"
														? "#65ff62"
														: "#fff",
											}}
										>
											{language === "EN" ? "About" : "Rreth"}
										</h2>
									</a>
								) : (
									<Link to={"/about"} style={{ height: "26px" }} onClick={handleHamburgerClick}>
										<h2
											className="nav-item"
											style={{
												color:
													location.pathname === "/about" ||
													location.pathname === "/about/sign-up" ||
													location.pathname === "/about/not-available"
														? "#65ff62"
														: "#fff",
											}}
										>
											{language === "EN" ? "About" : "Rreth"}
										</h2>
									</Link>
								)}
								{location.pathname != "/about" && location.pathname != "/about/sign-up" ? (
									<>
										<a href="#diets" className="nav-item linkToSection" onClick={handleHamburgerClick}>
											{language === "EN" ? "Diets" : "Dietat"}
										</a>
										<a href="#map" className="about" onClick={handleHamburgerClick}>
											{language === "EN" ? "Map" : "Harta"}
										</a>
									</>
								) : (
									""
								)}
								{isLoggedIn ? (
									<p className="greeting">
										{language === "EN" ? "Hello" : "Përshendetje"} {accountDetails.name}
									</p>
								) : location.pathname === "/" ? (
									<Link
										to={"/sign-up"}
										className="sign-up"
										style={language === "AL" ? { fontSize: "0.75rem", padding: "7px" } : {}}
										onClick={handleHamburgerClick}
									>
										{language === "EN" ? "Sign Up" : "Regjistrohu"}
									</Link>
								) : (
									<Link
										to={"/about/sign-up"}
										className="sign-up"
										style={language === "AL" ? { fontSize: "0.75rem", padding: "7px" } : {}}
										onClick={handleHamburgerClick}
									>
										{language === "EN" ? "Sign Up" : "Regjistrohu"}
									</Link>
								)}
								<h4
									className="language"
									onClick={() => {
										updateLanguage();
										handleHamburgerClick();
									}}
									style={{
										marginRight: language === "AL" ? "2px" : 0,
									}}
								>
									{language}
								</h4>
							</div>
						</div>
					</div>
				) : (
					<div className="right">
						{location.pathname === "/" ? (
							<a href="#" className="link">
								<h2
									className="nav-item home"
									style={{
										color:
											location.pathname === "/" ||
											location.pathname === "/sign-up" ||
											location.pathname === "/not-available"
												? "#65ff62"
												: "#fff",
									}}
								>
									{language === "EN" ? "Home" : "Shtëpi"}
								</h2>
							</a>
						) : (
							<Link to={"/"} className="link">
								<h2
									className="nav-item home"
									style={{
										color:
											location.pathname === "/" ||
											location.pathname === "/sign-up" ||
											location.pathname === "/not-available"
												? "#65ff62"
												: "#fff",
									}}
								>
									{language === "EN" ? "Home" : "Shtëpi"}
								</h2>
							</Link>
						)}
						{location.pathname === "/about" ? (
							<a href="#" className="link">
								<h2
									className="nav-item"
									style={{
										color:
											location.pathname === "/about" ||
											location.pathname === "/about/sign-up" ||
											location.pathname === "/about/not-available"
												? "#65ff62"
												: "#fff",
									}}
								>
									{language === "EN" ? "About" : "Rreth"}
								</h2>
							</a>
						) : (
							<Link to={"/about"} className="link">
								<h2
									className="nav-item"
									style={{
										color:
											location.pathname === "/about" ||
											location.pathname === "/about/sign-up" ||
											location.pathname === "/about/not-available"
												? "#65ff62"
												: "#fff",
									}}
								>
									{language === "EN" ? "About" : "Rreth"}
								</h2>
							</Link>
						)}
						{location.pathname != "/about" && location.pathname != "/about/sign-up" ? (
							<>
								<a href="#diets" className="nav-item linkToSection">
									{language === "EN" ? "Diets" : "Dietat"}
								</a>
								<a href="#map" className="about">
									{language === "EN" ? "Map" : "Harta"}
								</a>
							</>
						) : (
							""
						)}
						{isLoggedIn ? (
							<p className="greeting">
								{language === "EN" ? "Hello" : "Përshendetje"} {accountDetails.name}
							</p>
						) : location.pathname === "/" ? (
							<Link to={"/sign-up"} className="sign-up">
								{language === "EN" ? "Sign Up" : "Regjistrohu"}
							</Link>
						) : (
							<Link to={"/about/sign-up"} className="sign-up">
								{language === "EN" ? "Sign Up" : "Regjistrohu"}
							</Link>
						)}
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
				)}
			</div>
		</div>
	);
}

export default NavBar;
