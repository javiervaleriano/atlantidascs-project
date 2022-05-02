import React, { useState } from "react";
// REACT ROUTER
import { Link, useLocation } from "react-router-dom";
import classes from "./modules/Header.module.scss";
// COMPONENTS
import NavigationLinks from "./NavigationLinks.component";


function Header({ visible }) {
	// State with only header scope
	const [headerActive, setHeaderActive] = useState(false);

	// VARIABLES
	const location = useLocation(),
		isVisible = location.pathname === "/" && visible;

	return (
		<header
			className={`${classes.Header} ${!isVisible ? classes.HeroVisible : ""}`}
		>
			<nav
				className={`navbar navbar-expand-lg navbar-light ${classes.Nav
					} ${headerActive ? classes.NavAct : ""}`}
			>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand py-lg-0">
						<div
							alt="Logo de Atlántida"
							className={classes.HeaderLogo}
						/>
					</Link>
					<button
						className={`navbar-toggler ${classes.NavToggler}`}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setHeaderActive(!headerActive)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={`collapse navbar-collapse ${classes.Links}`}
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto me-lg-0 ms-lg-auto mb-2 mb-lg-0">
							<NavigationLinks isVisible={isVisible} />
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
