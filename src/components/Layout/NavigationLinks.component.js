// STYLES
import React from "react";
// REACT ROUTER
import { NavLink } from "react-router-dom";
import "./modules/NavigationLinks.scss";


function NavigationLinks({ className, isVisible }) {
	const navLinkActive = isActive =>
		isActive
			? `nav-link${className ? " " + className : ""} active`
			: `nav-link${className ? ` ${className}` : ""}${isVisible ? ` visible` : ""}`;

	return (
		<>
			<li className="nav-item">
				<NavLink to="/" className={({ isActive }) => navLinkActive(isActive)}>
					Inicio
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
					to="/productos"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Productos
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
					to="/sobre-atlantida"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Sobre ATLANTIDA
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
			<li className="nav-item">
				<NavLink
					to="/unete"
					className={({ isActive }) => navLinkActive(isActive)}
				>
					Únete
				</NavLink>
			</li>
		</>
	);
}

export default NavigationLinks;
