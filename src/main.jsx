import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
import App from "./routes/App";
import "./style.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ContextProvider>
);
