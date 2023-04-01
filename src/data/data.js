import weight from "../pictures/01_slimming.png";
import muscle from "../pictures/02_muscle.png";
import balanced from "../pictures/03_balanced.png";
import vegetarian from "../pictures/04_vegetarian.png";
import office from "../pictures/05_office.png";

export const dietDataEN = [
	{
		title: "Weight Loss",
		cal: "800-1000 cal",
		img: weight,
	},
	{
		title: "Muscle Gain",
		cal: "1400-2000 cal",
		img: muscle,
	},
	{
		title: "Balanced",
		cal: "1200-1400 cal",
		img: balanced,
	},
	{
		title: "Vegetarian",
		cal: "700-1000 cal",
		img: vegetarian,
	},
	{
		title: "Office",
		cal: "1200-1600 cal",
		img: office,
	},
];

export const dietDataAL = [
	{
		title: "Humbje Peshe",
		cal: "800-1000 cal",
		img: weight,
	},
	{
		title: "Fitim Muskujsh",
		cal: "1400-2000 cal",
		img: muscle,
	},
	{
		title: "E Balancuar",
		cal: "1200-1400 cal",
		img: balanced,
	},
	{
		title: "Vegjetarian",
		cal: "700-1000 cal",
		img: vegetarian,
	},
	{
		title: "Zyrë",
		cal: "1200-1600 cal",
		img: office,
	},
];

export const breakPoints = [
	{
		width: 500,
		itemsToShow: 1,
	},
	{
		width: 768,
		itemsToShow: 2,
	},
	{
		width: 1200,
		itemsToShow: 3,
	},
];

export const plansEN = {
	free: {
		yes: ["Recommended diets", "Create your own personal diet", "See restaurants and markets in the map"],
		no: ["No Ads", "Find information about products instantly", "24/7 Chatbot", "Recipes for meals"],
	},
	premium: [
		"Recommended diets",
		"Create your own personal diet",
		"See restaurants and markets in the map",
		"No Ads",
		"Find information about products instantly",
		"24/7 Chatbot",
		"Recipes for meals",
	],
};

export const plansAL = {
	free: {
		yes: ["Dieta te rekomanduara", "Krijoni dietën tuaj personale", "Shih restorantet dhe marketet në hartë"],
		no: ["Pa reklama", "Gjeni informacione për produktet menjëherë", "24/7 Chatbot", "Receta për ushqime"],
	},
	premium: [
		"Dieta te rekomanduara",
		"Krijoni dietën tuaj personale",
		"Shih restorantet dhe marketet në hartë",
		"Pa reklama",
		"Gjeni informacione për produktet menjëherë",
		"24/7 Chatbot",
		"Receta për ushqime",
	],
};
