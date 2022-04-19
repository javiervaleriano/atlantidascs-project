import React, { useState } from "react";
// REACT ROUTER
import { Link } from "react-router-dom";

// ASSETS & CLASSES
import AtlantidaLogo from "../../assets/images/atlantida-logo-173x110.png";
import classes from "./modules/Header.module.scss";
// COMPONENTS
import NavigationLinks from "./NavigationLinks.component";

function Header() {
	const [headerActive, setHeaderActive] = useState(false);

	return (
		<header className={classes.Header}>
			<nav
				className={`navbar navbar-expand-lg navbar-light py-lg-0 ${
					classes.Nav
				} ${headerActive ? classes.NavAct : ""}`}
			>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand py-lg-0">
						<img
							src={AtlantidaLogo}
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
							<NavigationLinks />
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
