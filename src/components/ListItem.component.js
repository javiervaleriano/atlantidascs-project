import React from "react";

// CLASSES
import classes from "./modules/ListItem.module.scss";

function ListItem({ icon, text, className }) {
	return (
		<p className={`${classes.ListItem} ${className || ""}`}>
			<i className={icon}></i>
			<span>{text}</span>
		</p>
	);
}

export default ListItem;
