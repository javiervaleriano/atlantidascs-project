// STYLES
import "./App.css";

import { React /*, lazy*/ } from "react";
// REACT ROUTER
import { HashRouter, Route, Routes } from "react-router-dom";

// COMPONENTS
// import Error404 from "./pages/errors/Error404.screen";
import Home from "./pages/home/Home.screen";
// ROUTING
import PublicRoute from "./routing/PublicRoute";
// const About = lazy(() => import("./pages/about/About.screen"));

function App() {
	return (
		<HashRouter>
			<Routes>
				{/* PUBLIC ROUTES */}
				<Route path="/" element={<PublicRoute />}>
					<Route index element={<Home />} />
				</Route>
				{/* <Route path="/sobre-atlantida" element={<PublicRoute />}>
					<Route index element={<About />} />
				</Route> */}
				{/* <Route path="/servicios" />
				<Route path="/contacto" /> */}

				{/* ERROR 404 */}
				{/* <Route path="*" element={<PublicRoute />}>
					<Route index element={<Error404 />} />
				</Route> */}
				{/* <Route path="*" element={<Error404 />} /> */}
			</Routes>
		</HashRouter>
	);
}

export default App;
