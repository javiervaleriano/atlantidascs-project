import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout.component";
import { helpWidthDevice } from "../helpers/helpWidthDevice";
import ScrollToTop from "../hoc/ScrollToTop.component";
import { useIntersectionElements } from "../hooks/useIntersectionElements";


function PublicRoute() {
	const widthDevice = helpWidthDevice();
	// Intersection to the Hero homepage
	const { visible, containerRef } = useIntersectionElements({
		root: null,
		margin: 0,
		threshold:
			widthDevice === "mobile"
				? 0.83
				: widthDevice === "sdesktop"
					? 0.83
					: widthDevice === "desktop"
						? 0.77
						: 0.77,
	});

	return (
		<ScrollToTop>
			<Layout visible={visible}>
				<Outlet context={[containerRef]} />
			</Layout>
		</ScrollToTop>
	);
}

export default PublicRoute;
