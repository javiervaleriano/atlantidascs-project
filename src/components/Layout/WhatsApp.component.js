import React from "react";

import classes from "./modules/WhatsApp.module.scss";

function WhatsApp() {
	return (
		<a
			href="https://cutt.ly/bFx4g7B"
			target="_blank"
			className={classes.WhatsApp}
			title="Escríbenos por WhatsApp también"
			rel="noreferrer"
		>
			<i className="fa-brands fa-whatsapp"></i>
		</a>
	);
}

export default WhatsApp;
