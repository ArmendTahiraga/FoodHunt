import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
import App from "./routes/App";
import SignUp from "./routes/Signup";
import NotYetAvailable from "./routes/NotYetAvailable";
import "./style.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/sign-up",
				element: <SignUp />,
			},
			{
				path: "/not-available",
				element: <NotYetAvailable />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<RouterProvider router={router} />
	</ContextProvider>
);
