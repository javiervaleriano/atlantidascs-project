import React from "react";

// COMPONENTS
import WhatsApp from "../Layout/WhatsApp.component.js";
import Footer from "./Footer.component";
import Header from "./Header.component";

function Layout({ visible, children }) {
	return (
		<>
			<Header visible={visible} />
			{children}
			<WhatsApp />
			<Footer />
		</>
	);
}

export default Layout;
