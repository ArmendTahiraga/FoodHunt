import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useStateContext } from "../ContextProvider";
import { Outlet, Link } from "react-router-dom";

function About() {
	return (
		<div>
			<div>
				<Outlet />
			</div>
			<NavBar />
			<div className="wave"></div>
			<Footer />
		</div>
	);
}

export default About;
