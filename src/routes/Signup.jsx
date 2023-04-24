import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

function SignUp() {
	const { language, handleSignUp, setSignUpDetails } = useStateContext();
	const location = useLocation();

	return (
		<div className="sign-up-container module">
			{location.pathname === "/sign-up" ? (
				<Link to="/" className="close">
					<span className="material-symbols-outlined">close</span>
				</Link>
			) : (
				<Link to="/about" className="close">
					<span className="material-symbols-outlined">close</span>
				</Link>
			)}

			<h2 className="sign-up-title">{language === "EN" ? "Sign Up" : "Regjistrohu"}</h2>
			<div className="form-control">
				<input
					type="value"
					required
					onChange={(e) => setSignUpDetails((prevSignUpDetails) => ({ ...prevSignUpDetails, name: e.target.value }))}
				/>
				<label>
					{language === "EN" ? (
						<>
							<span style={{ transitionDelay: "0ms" }}>N</span>
							<span style={{ transitionDelay: "50ms" }}>a</span>
							<span style={{ transitionDelay: "100ms" }}>m</span>
							<span style={{ transitionDelay: "150ms" }}>e</span>
						</>
					) : (
						<>
							<span style={{ transitionDelay: "0ms" }}>E</span>
							<span style={{ transitionDelay: "50ms" }}>m</span>
							<span style={{ transitionDelay: "100ms" }}>r</span>
							<span style={{ transitionDelay: "150ms" }}>i</span>
						</>
					)}
				</label>
			</div>
			<div className="form-control">
				<input
					type="value"
					required
					onChange={(e) => setSignUpDetails((prevSignUpDetails) => ({ ...prevSignUpDetails, email: e.target.value }))}
				/>
				<label>
					<span style={{ transitionDelay: "0ms" }}>E</span>
					<span style={{ transitionDelay: "50ms" }}>m</span>
					<span style={{ transitionDelay: "100ms" }}>a</span>
					<span style={{ transitionDelay: "150ms" }}>i</span>
					<span style={{ transitionDelay: "200ms" }}>l</span>
				</label>
			</div>
			<div className="form-control">
				<input
					type="password"
					required
					onChange={(e) =>
						setSignUpDetails((prevSignUpDetails) => ({ ...prevSignUpDetails, password: e.target.value }))
					}
				/>
				<label>
					{language === "EN" ? (
						<>
							<span style={{ transitionDelay: "0ms" }}>P</span>
							<span style={{ transitionDelay: "50ms" }}>a</span>
							<span style={{ transitionDelay: "100ms" }}>s</span>
							<span style={{ transitionDelay: "150ms" }}>s</span>
							<span style={{ transitionDelay: "200ms" }}>w</span>
							<span style={{ transitionDelay: "250ms" }}>o</span>
							<span style={{ transitionDelay: "300ms" }}>r</span>
							<span style={{ transitionDelay: "350ms" }}>d</span>
						</>
					) : (
						<>
							<span style={{ transitionDelay: "0ms" }}>F</span>
							<span style={{ transitionDelay: "50ms" }}>j</span>
							<span style={{ transitionDelay: "100ms" }}>a</span>
							<span style={{ transitionDelay: "150ms" }}>l</span>
							<span style={{ transitionDelay: "200ms" }}>ë</span>
							<span style={{ transitionDelay: "250ms" }}>k</span>
							<span style={{ transitionDelay: "300ms" }}>a</span>
							<span style={{ transitionDelay: "350ms" }}>l</span>
							<span style={{ transitionDelay: "400ms" }}>i</span>
							<span style={{ transitionDelay: "450ms" }}>m</span>
							<span style={{ transitionDelay: "500ms" }}>i</span>
						</>
					)}
				</label>
			</div>
			{location.pathname === "/sign-up" ? (
				<Link to="/" onClick={handleSignUp} className="sign-up-button">
					{language === "EN" ? "Sign Up" : "Regjistrohu"}
				</Link>
			) : (
				<Link to="/about" onClick={handleSignUp} className="sign-up-button">
					{language === "EN" ? "Sign Up" : "Regjistrohu"}
				</Link>
			)}
		</div>
	);
}

export default SignUp;
