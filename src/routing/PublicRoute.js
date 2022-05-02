import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout.component";
import ScrollToTop from "../hoc/ScrollToTop.component";
import { helpWidthDevice } from "../shared/helpers/helpWidthDevice";
import { useIntersectionElements } from "../shared/hooks/useIntersectionElements";


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
