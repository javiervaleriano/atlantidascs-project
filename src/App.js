// STYLES
import { lazy, React, Suspense } from "react";
// REACT ROUTER
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// COMPONENTS
// import Error404 from "./pages/errors/Error404.screen";
import Home from "./pages/home/Home.screen";
// import Services from "./pages/services/Services.screen";
// ROUTING
import PublicRoute from "./routing/PublicRoute";


// const About = lazy(() => import("./pages/about/About.screen"));
const Services = lazy(() => import("./pages/services/Services.screen.js"));

function App() {
	return (
		<Suspense fallback={<h2>Cargando...</h2>}>
			<HashRouter>
				<Routes>
					{/* PUBLIC ROUTES */}
					<Route path="/" element={<PublicRoute />}>
						<Route index element={<Home />} />
					</Route>
					{/* <Route path="/sobre-atlantida" element={<PublicRoute />}>
						<Route index element={<About />} />
					</Route> */}
					<Route path="/servicios" element={<PublicRoute />}>
						<Route index element={<Services />} />
					</Route>
					{/* <Route path="/contacto" /> */}

					{/* ERROR 404 */}
					{/* <Route path="*" element={<PublicRoute />}>
						<Route index element={<Error404 />} />
					</Route> */}
					{/* <Route path="*" element={<Error404 />} /> */}
				</Routes>
			</HashRouter>
		</Suspense>
	);
}

export default App;
