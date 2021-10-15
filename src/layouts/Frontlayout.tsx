import FooterComp from "components/FooterComp";
import HeaderComp from "components/HeaderComp";
import React from "react";

const Frontlayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<div className="front">
			<HeaderComp />
			<main className="front-main">{children}</main>
			<FooterComp />
		</div>
	);
};

export default Frontlayout;
