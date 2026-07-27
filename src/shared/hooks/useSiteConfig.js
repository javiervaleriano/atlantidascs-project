import { useEffect, useState } from "react";

let configPromise = null;

const fetchSiteConfig = () => {
	if (!configPromise) {
		configPromise = fetch("/config.json", { cache: "no-store" })
			.then((res) => {
				if (!res.ok) throw new Error("No se pudo obtener config.json");
				return res.json();
			})
			.catch((error) => {
				// Permite reintentar en el próximo montaje en vez de cachear el fallo
				configPromise = null;
				throw error;
			});
	}

	return configPromise;
};

// Carga /config.json (correos, teléfonos, RIF, dirección) una sola vez por sesión
// y comparte el mismo resultado entre todos los componentes que lo consuman
// (Footer, Contact, Form), en vez de que cada uno dispare su propio fetch.
export const useSiteConfig = () => {
	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		let ignore = false;

		fetchSiteConfig()
			.then((data) => { if (!ignore) setConfig(data); })
			.catch((error) => {
				console.error(error);
				if (!ignore) setError(true);
			});

		return () => { ignore = true; };
	}, []);

	return [config, error];
};
