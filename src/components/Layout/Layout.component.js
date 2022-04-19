import React from "react";

// COMPONENTS
import Footer from "./Footer.component";
import Header from "./Header.component";

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
