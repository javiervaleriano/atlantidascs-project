import React, { useCallback, useEffect, useRef, useState } from "react";
// ASSETS
import AtrioSeguros from "../assets/images/aseguradoras/atrio_seguros_logo.png";
import BanescoSeguros from "../assets/images/aseguradoras/banesco_seguros_logo.png";
import EstarSeguros from "../assets/images/aseguradoras/estar_seguros_logo.png";
import HispanaSeguros from "../assets/images/aseguradoras/hispana_seguros_logo.png";
import LiderSeguros from "../assets/images/aseguradoras/lider_seguros_logo.png";
import Mapfre from "../assets/images/aseguradoras/mapfre_logo.png";
import Mercantil from "../assets/images/aseguradoras/mercantil_logo.png";
import NuevoMundo from "../assets/images/aseguradoras/nuevo_mundo_logo.png";
import OceanicaSeguros from "../assets/images/aseguradoras/oceanica_seguros_logo.png";
import Oriental from "../assets/images/aseguradoras/oriental_seguros_logo.png";
import RealSeguros from "../assets/images/aseguradoras/real_seguros_logo.svg";
import SegurosCaracas from "../assets/images/aseguradoras/seguros_caracas_logo.png";
import Universitas from "../assets/images/aseguradoras/universitas_logo.svg";
import Uniseguros from "../assets/images/aseguradoras/uniseguros_logo.png";
import Venezuela from "../assets/images/aseguradoras/seguros_venezuela_logo.png";
import VenezolanaSeguros from "../assets/images/aseguradoras/venezolana_seguros_logo.png";
// CLASSES
import classes from "./modules/Companies.module.scss";

// COMPANIES DATA
const insurers = [
	{ id: "banesco", name: "Banesco Seguros", logo: BanescoSeguros, link: "" },
	{ id: "atrio", name: "Atrio Seguros", logo: AtrioSeguros, link: "" },
	{ id: "estar", name: "Estar Seguros", logo: EstarSeguros, link: "" },
	{ id: "hispana", name: "Hispana Seguros", logo: HispanaSeguros, link: "" },
	{ id: "venezolana", name: "La Venezolana de Seguros y Vida", logo: VenezolanaSeguros, link: "" },
	{ id: "mapfre", name: "MAPFRE", logo: Mapfre, link: "" },
	{ id: "mercantil", name: "Mercantil Seguros", logo: Mercantil, link: "" },
	{ id: "nuevoMundo", name: "Seguros Nuevo Mundo", logo: NuevoMundo, link: "" },
	{ id: "oriental", name: "La Oriental de Seguros", logo: Oriental, link: "" },
	{ id: "segurosCaracas", name: "Seguros Caracas", logo: SegurosCaracas, link: "" },
	{ id: "universitas", name: "Seguros Universitas", logo: Universitas, link: "" },
	{ id: "venezuela", name: "Seguros Venezuela", logo: Venezuela, link: "" },
	{ id: "oceanica", name: "Oceánica de Seguros", logo: OceanicaSeguros, link: "" },
	{ id: "uniseguros", name: "Uniseguros", logo: Uniseguros, link: "" },
	{ id: "real", name: "Real Seguros", logo: RealSeguros, link: "" },
	{ id: "lider", name: "Líder de Seguros", logo: LiderSeguros, link: "" },
];

function Companies({ justSlider, className }) {
	const trackRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);

	const updateArrows = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;

		setCanScrollLeft(track.scrollLeft > 1);
		setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
	}, []);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		updateArrows();

		track.addEventListener("scroll", updateArrows, { passive: true });
		window.addEventListener("resize", updateArrows);

		return () => {
			track.removeEventListener("scroll", updateArrows);
			window.removeEventListener("resize", updateArrows);
		};
	}, [updateArrows]);

	const slide = (direction) => {
		const track = trackRef.current;
		if (!track) return;

		track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
	};

	return (
		<section className={`${classes.CompaniesSection} ${className ? className : ""}`}>
			{!justSlider && <h2>Las mejores Aseguradoras del país trabajan con nosotros</h2>}
			<div className={classes.CompaniesSlider}>
				<button
					type="button"
					onClick={() => slide(-1)}
					disabled={!canScrollLeft}
					aria-label="Ver aseguradoras anteriores"
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<ul className={classes.CompaniesContainer} ref={trackRef}>
					{insurers.map(({ id, name, logo, link }) => (
						<li key={id} className={classes.CompanyItem}>
							<img src={logo} alt={name} loading="lazy" />
							{/* <a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Ir al sitio web de ${name} (se abre en una pestaña nueva)`}
							> */}
							{/* </a> */}
						</li>
					))}
				</ul>
				<button
					type="button"
					onClick={() => slide(1)}
					disabled={!canScrollRight}
					aria-label="Ver más aseguradoras"
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</section>
	);
}

export default Companies;
