import React, { useEffect, useRef, useState } from "react";

// ASSETS
import AtrioSeguros from "../assets/images/aseguradoras/atrio_seguros_logo.png";
import BanescoSeguros from "../assets/images/aseguradoras/banesco_seguros_logo.png";
import EstarSeguros from "../assets/images/aseguradoras/estarseguros_logo.jpg";
import HispanaSeguros from "../assets/images/aseguradoras/hispana_logo.png";
import Iberoseguros from "../assets/images/aseguradoras/iberoseguros_logo.png";
import SegurosCaracas from "../assets/images/aseguradoras/logo_seguros_caracas.svg";
import Universitas from "../assets/images/aseguradoras/logo_universitas.svg";
import Mapfre from "../assets/images/aseguradoras/mapfre_logo.svg";
import Mercantil from "../assets/images/aseguradoras/mercantil_logo.svg";
import NuevoMundo from "../assets/images/aseguradoras/nuevo_mundo_logo.jpg";
import Oriental from "../assets/images/aseguradoras/oriental_seguros_logo.svg";
import Piramide from "../assets/images/aseguradoras/piramide_seguros_logo.svg";
import Venezuela from "../assets/images/aseguradoras/seguros_venezuela.jpg";
import Uniseguros from "../assets/images/aseguradoras/uniseguros_logo.png";
import VenezolanaSeguros from "../assets/images/aseguradoras/venezolana_seguros_logo.jpg";
import { helpWidthDevice } from "../helpers/helpWidthDevice";
// CLASSES
import classes from "./modules/Companies.module.scss";

function Companies() {
	const [pixels, setPixels] = useState(0);
	const [screenSize, setScreenSize] = useState("");
	const [imgWidth, setImgWidth] = useState(0);
	const companyImg = useRef(null);

	const leftSlide = () => {
		if (pixels > 0) {
			setPixels(
				pixels - (companyImg.current.getBoundingClientRect().width + 24)
			);
		}
	};

	const rightSlide = () => {
		const slideOpts = {
			mobile: () =>
				pixels < imgWidth * 12 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
			tablet: () =>
				pixels < imgWidth * 10 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
			sdesktop: () =>
				pixels < imgWidth * 9 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
			desktop: () =>
				pixels < imgWidth * 7 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
			ldesktop: () =>
				pixels < imgWidth * 7 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
			xldesktop: () =>
				pixels < imgWidth * 4 + 24 &&
				setPixels(
					pixels + (companyImg.current.getBoundingClientRect().width + 24)
				),
		};

		slideOpts[screenSize]();
	};

	// EFFECTS
	useEffect(() => {
		setImgWidth(companyImg.current.getBoundingClientRect().width + 24);
	}, [imgWidth]);

	useEffect(() => {
		if (!screenSize) setScreenSize(helpWidthDevice());

		window.addEventListener("resize", () => {
			setScreenSize(helpWidthDevice());
		});

		return () => window.removeEventListener("resize", helpWidthDevice);
	}, [screenSize]);

	return (
		<section className={classes.CompaniesSection}>
			<h2>Las mejores Aseguradoras del país trabajan con nosotros</h2>
			<div className={classes.CompaniesSlider}>
				<button type="button" onClick={leftSlide}>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<figure className={classes.CompaniesContainer}>
					<img
						src={AtrioSeguros}
						alt="Atrio Seguros"
						ref={companyImg}
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={BanescoSeguros}
						alt="Banesco Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={EstarSeguros}
						alt="Estar Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={HispanaSeguros}
						alt="Hispana de Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Iberoseguros}
						alt="Iberoseguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={VenezolanaSeguros}
						alt="La Venezolana de Seguros y Vida"
						style={{ right: `${pixels}px` }}
					/>
					<img src={Mapfre} alt="MAPFRE" style={{ right: `${pixels}px` }} />
					<img
						src={Mercantil}
						alt="Mercantil Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={NuevoMundo}
						alt="Seguros Nuevo Mundo"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Oriental}
						alt="La Oriental de Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={SegurosCaracas}
						alt="Seguros Caracas"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Universitas}
						alt="Seguros Universitas"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Venezuela}
						alt="Seguros Venezuela"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Piramide}
						alt="Pirámide Seguros"
						style={{ right: `${pixels}px` }}
					/>
					<img
						src={Uniseguros}
						alt="Uniseguros"
						style={{ right: `${pixels}px` }}
					/>
				</figure>
				<button type="button" onClick={rightSlide}>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</section>
	);
}

export default Companies;
