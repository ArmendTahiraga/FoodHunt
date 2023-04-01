import React from "react";import { useStateContext } from "../ContextProvider";
import { plansAL, plansEN } from "../data/data";
import check from "../pictures/check.svg";
import x from "../pictures/x.svg";

function PaymentPlan() {
	const { language } = useStateContext();
	const planButtonStyle = {
		marginLeft: language === "EN" ? "27%" : "23%",
	};
	return (
		<div className="plan-container">
			<div className="free plan">
				<h2 className="plan-title">{language === "EN" ? "Free" : "Falas"}</h2>
				<div className="benefits">
					{language === "EN"
						? plansEN.free.yes.map((i) => (
								<div className="benefit">
									<img src={check} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))
						: plansAL.free.yes.map((i) => (
								<div className="benefit">
									<img src={check} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))}
					{language === "EN"
						? plansEN.free.no.map((i) => (
								<div className="benefit">
									<img src={x} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))
						: plansAL.free.no.map((i) => (
								<div className="benefit">
									<img src={x} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))}
				</div>
				<button className="plan-button" style={planButtonStyle}>
					{language === "EN" ? "Chose plan" : "Zgjidh planin"}
				</button>
			</div>
			<div className="premium plan">
				<h2 className="plan-title">Premium</h2>
				<div className="benefits">
					{language === "EN"
						? plansEN.premium.map((i) => (
								<div className="benefit">
									<img src={check} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))
						: plansAL.premium.map((i) => (
								<div className="benefit">
									<img src={check} alt="" className="benefit-icon" />
									<p className="benefit-detail">{i}</p>
								</div>
						  ))}
				</div>
				<button className="plan-button" style={planButtonStyle}>
					{language === "EN" ? "Chose plan" : "Zgjidh planin"}
				</button>
			</div>
		</div>
	);
}

export default PaymentPlan;
