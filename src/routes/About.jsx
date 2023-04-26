import React from "react";import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useStateContext } from "../ContextProvider";
import { Outlet } from "react-router-dom";

function About() {
	const { language } = useStateContext();

	return (
		<div>
			<div>
				<Outlet />
			</div>
			<NavBar />
			<main className="about-main">
				<div className="left">
					<h1 className="welcome">{language === "EN" ? "Welcome to FoodHunt!" : "Mirë se vini në FoodHunt"}</h1>
					<p className="business-info">
						{language === "EN"
							? `We are a business that is dedicated to promoting healthy eating habits and helping individuals make
						good decisions about their nutrition. With obesity and poor nutrition becoming an increasingly
						pressing issue, we strive to make a difference by providing tailored diets and plans to those who want to
						improve their health and well-being.`
							: `Ne jemi një biznes që është i përkushtuar për të promovuar zakone të shëndetshme të të ngrënit dhe për të ndihmuar individët të bëjnë
						vendime të mira për ushqimin e tyre. Me obezitetin dhe ushqyerjen e dobët duke u bërë gjithnjë e më shumë
						çështje e rënde, ne përpiqemi të bëjmë një ndryshim duke ofruar dieta dhe plane të përshtatura për ata që duan të
						përmirësojnë shëndetin dhe mirëqenien e tyre.`}
						<br />
						{language === "EN"
							? `At FoodHunt, we believe that good nutrition is not just about what you eat, but where you source your food
						from. We have partnered with high-quality restaurants and markets to ensure that our customers have access
						to quality products that are not only nutritious but also delicious.`
							: `Në FoodHunt, ne besojmë se ushqimi i mirë nuk ka të bëjë vetëm me atë që hani, por edhe se nga ku e merrni ushqimin tuaj. Ne kemi bashkëpunuar me restorante dhe tregje të cilësisë së lartë për të siguruar që klientët tanë të kenë akses
						për produkte cilësore që nuk janë vetëm ushqyese, por edhe të shijshme.`}
						<br />
						{language === "EN"
							? `Thank you for choosing FoodHunt! We are excited to embark on this journey with you towards a healthier and
						happier life.`
							: `Faleminderit që zgjodhët FoodHunt! Ne jemi të ngazëllyer të fillojmë këtë udhëtim me ju drejt një jete më të shëndetshme dhe
						më e lumtur.`}
					</p>
				</div>
				<div className="right">
					<div className="erti-container member">
						<div className="about-member erti"></div>
						<div className="member-info erti-info">
							<h1 className="member-name">Erti Muhja</h1>
							<p className="member-role">{language === "EN" ? "Organizer" : "Organizator"}</p>
						</div>
					</div>
					<div className="armend-container member">
						<div className="about-member armend"></div>
						<div className="member-info armend-info">
							<h1 className="member-name">Armend Tahiraga</h1>
							<p className="member-role">
								{language === "EN" ? "Web & App Developer" : "Zhvilluesi i faqes dhe aplikacionit"}
							</p>
						</div>
					</div>
					<div className="olger-container member">
						<div className="about-member olger"></div>
						<div className="member-info olger-info">
							<h1 className="member-name">Olger Peraj</h1>
							<p className="member-role">{language === "EN" ? "Accountant" : "Llogaritar"}</p>
						</div>
					</div>
					<div className="luis-container member">
						<div className="about-member luis"></div>
						<div className="member-info luis-info">
							<h1 className="member-name">Luis Smakaj</h1>
							<p className="member-role">{language === "EN" ? "Marketer" : "Reklamuesi"}</p>
						</div>
					</div>
				</div>
			</main>
			<div className="wave"></div>
			<Footer />
		</div>
	);
}

export default About;
