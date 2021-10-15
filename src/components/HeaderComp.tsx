import React from "react";
import Link from "next/link";

const HeaderComp = () => {
	return (
		<header>
			<nav className="navbar container">
				<h1>Logo</h1>

				<ul className="nav">
					{navItems.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.link}>
								<a className="nav-link">{nav.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default HeaderComp;

const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Contact", link: "/contact" },
];
