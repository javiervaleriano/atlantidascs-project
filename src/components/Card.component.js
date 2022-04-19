import React from "react";
// CLASSES
import classes from "./modules/Card.module.scss";


function Card({ className, children }) {
	return (
		<article className={`${classes.Card}${className ? ` ${className}` : ""}`}>
			{children}
		</article>
	);
}

export default Card;
