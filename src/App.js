import { lazy, React, Suspense } from "react";
// REACT ROUTER
import { HashRouter, Route, Routes } from "react-router-dom";
// STYLES
import "./App.css";
// LOADER
import Loader from "./components/Loader.component";
// SCREENS
import Error404 from "./pages/errors/Error-404.screen";
import Home from "./pages/home/Home.screen";
// ROUTING
import PublicRoute from "./routing/PublicRoute";
// SCREENS AND COMPONENT
const About = lazy(() => import("./pages/about/About.screen")),
	Contact = lazy(() => import("./pages/contact/Contact.screen")),
	Products = lazy(() => import("./pages/products/Products.screen.js")),
	Glossary = lazy(() => import("./components/Glossary.component")),
	Join = lazy(() => import("./pages/join/Join.screen.js")),
	ThankYou = lazy(() => import("./pages/join/ThankYou.screen.js"));

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<HashRouter>
				<Routes>
					{/* PUBLIC ROUTES */}
					<Route path="/" element={<PublicRoute />}>
						<Route index element={<Home />} />
					</Route>
					<Route path="/productos" element={<PublicRoute />}>
						<Route index element={<Products />} />
						<Route path="/productos/glosario" element={<Glossary />} />
					</Route>
					<Route path="/sobre-atlantida" element={<PublicRoute />}>
						<Route index element={<About />} />
					</Route>
					<Route path="/contacto" element={<PublicRoute />}>
						<Route index element={<Contact />} />
					</Route>
					<Route path="/unete" element={<PublicRoute />}>
						<Route index element={<Join />} />
						<Route path="/unete/gracias" element={<ThankYou />} />
					</Route>

					{/* ERROR 404 */}
					<Route path="*" element={<PublicRoute />}>
						<Route path="*" element={<Error404 />} />
					</Route>
				</Routes>
			</HashRouter>
		</Suspense>
	);
}

export default App;
