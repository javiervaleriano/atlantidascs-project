// STYLES
import "./modules/NavigationLinks.scss";

import React from "react";
// REACT ROUTER
import { NavLink } from "react-router-dom";

function NavigationLinks({ className }) {
	const navLinkActive = isActive =>
		isActive
			? `nav-link${className ? " " + className : ""} active`
			: `nav-link ${className}`;

	return (
		<>
			<li className="nav-item">
				<NavLink to="/" className={({ isActive }) => navLinkActive(isActive)}>
					Inicio
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
					to="/sobre-atlantida"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Sobre ATLÁNTIDA
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
					to="/servicios"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Servicios
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
					to="/contacto"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Contacto
				</NavLink>
			</li>
		</>
	);
}

export default NavigationLinks;
