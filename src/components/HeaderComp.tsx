import React from "react";
import Link from "next/link";

const HeaderComp = () => {
	return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-light">
	<div className="container">
		<Link href="#">
		<a className="navbar-brand" href="#">
			<img src="/image/logo" width={50} height={50} alt="purity logo" />
		</a>
		</Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
		<ul className="navbar-nav">
			<li className="nav-item mx-3">
			<a className="nav-link active" aria-current="page" href="#">Home</a>
			</li>	
			<li className="nav-item mx-3">
			<a className="nav-link" href="#">Products</a>
			</li>
			<li className="nav-item mx-3">
			<a className="nav-link" href="#">About Us</a>
			</li>
			<li className="nav-item mx-3">
			<a className="nav-link" href="#">Contact</a>
			</li>
		</ul>
		</div>
	</div>
	</nav>
			</header>
		// <header>
		// 	<nav className="navbar container">
		// 		<h1>Logo</h1>

		// 		<ul className="nav">
		// 			{navItems.map((nav, i) => (
		// 				<li className="nav-item" key={i}>
		// 					<Link href={nav.link}>
		// 						<a className="nav-link">{nav.name}</a>
		// 					</Link>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</nav>
		// </header>
	);
};

export default HeaderComp;

// const navItems = [
// 	{ name: "Home", link: "/" },
// 	{ name: "About", link: "/about" },
// 	{ name: "Contact", link: "/contact" },
// ];
