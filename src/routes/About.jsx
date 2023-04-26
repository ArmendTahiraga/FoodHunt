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
			<main className="about-main">
				<div className="left">
					<div className="erti-container member">
						<div className="about-member erti"></div>
						<div className="member-info erti-info">
							<h1 className="member-name">Erti Muhja</h1>
							<p className="member-role">Organizer</p>
						</div>
					</div>
					<div className="armend-container member">
						<div className="member-info armend-info">
							<h1 className="member-name">Armend Tahiraga</h1>
							<p className="member-role">Web & App Developer</p>
						</div>
						<div className="about-member armend"></div>
					</div>
					<div className="olger-container member">
						<div className="about-member olger"></div>
						<div className="member-info olger-info">
							<h1 className="member-name">Olger Peraj</h1>
							<p className="member-role">Accountant</p>
						</div>
					</div>
					<div className="luis-container member">
						<div className="member-info luis-info">
							<h1 className="member-name">Luis Smakaj</h1>
							<p className="member-role">Marketer</p>
						</div>
						<div className="about-member luis"></div>
					</div>
				</div>
				<div className="right">
					<h1 className="welcome">Welcome to FoodHunt!</h1>
					<p className="business-info">
						We are a business that is dedicated to promoting healthy eating habits and helping individuals make
						informed decisions about their nutrition. With obesity and poor nutrition becoming an increasingly
						pressing issue, we strive to make a difference by providing tailored diets and plans to those who want to
						improve their health and well-being.
						<br />
						At FoodHunt, we believe that good nutrition is not just about what you eat, but where you source your food
						from. We have partnered with high-quality restaurants and markets to ensure that our customers have access
						to quality products that are not only nutritious but also delicious.
						<br />
						Thank you for choosing FoodHunt! We are excited to embark on this journey with you towards a healthier and
						happier life.
					</p>
				</div>
			</main>
			<div className="wave"></div>
			<Footer />
		</div>
	);
}

export default About;
