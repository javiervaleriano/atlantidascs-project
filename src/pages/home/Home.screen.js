import React from "react";
import { Link, useOutletContext } from "react-router-dom";
// ASSETS
import automovilImg from "../../assets/images/products/automovil.jpg";
import funerariosImg from "../../assets/images/products/funerarios.jpg";
import saludImg from "../../assets/images/products/salud.jpg";
//COMPONENTS
import Card from "../../components/Card.component";
import Companies from "../../components/Companies.component";
import CotizarBtn from "../../components/CotizarBtn.component";
import ListItem from "../../components/ListItem.component";
import Publicity from "../../components/Publicity.component";
// CLASSES
import classes from "./modules/Home.screen.module.scss";


// HOME PRODUCTS
const homeProducts = [
	{
		id: "autoMobile",
		img: automovilImg,
		imgAlt: "Parte frontal de un vehículo golpeado",
		title: "Automóvil",
		desc: "Asegura tu vehículo y viaja con tranquilidad"
	},
	{
		id: "health",
		img: saludImg,
		imgAlt: "Doctor de brazos cruzados con un estetoscopio en mano",
		title: "Salud",
		desc: "Asegura tu bienestar y el de tus seres queridos"
	},
	{
		id: "funerary",
		img: funerariosImg,
		imgAlt: "Ataúd en una iglesia",
		title: "Funerarios",
		desc: "Obtén tranquilidad respaldando a tu grupo familiar con una póliza de Servicio Funerario."
	}
];


function Home() {
	// Get Outlet component context from React Router
	const [containerRef] = useOutletContext();

	return (
		<>
			<section
				className={`px-3 py-5 ${classes.HeroContainer}`}
				ref={containerRef}
			>
				<div className={classes.Hero}>
					<h2 className="fw-normal">Asesoría e Intermediación de Seguros</h2>
					<h1 className="fw-bold">
						ATLÁNTIDA
						<br />
						Sociedad de Corretaje de Seguros
					</h1>
					<span className={`mx-auto ${classes.HeroDivide}`}></span>
					<p className={`mb-4 ${classes.HeroPgph}`}>
						<span className={classes.HeroPgph_breaker}>
							Asegúrate con nosotros,
						</span>{" "}
						con las mejores coberturas al mejor precio.
					</p>
				</div>
			</section>
			<Companies />
			<section className={classes.ServicesSection}>
				<h2>Adquiere nuestros mejores productos</h2>
				<div className={classes.CardsContainer}>
					{homeProducts.map(({ id, img, imgAlt, title, desc }) => (
						<Card className={classes.ServiceCard} key={id}>
							<figure>
								<img src={img} alt={imgAlt} loading="lazy" />
							</figure>
							<h3>{title}</h3>
							<p>{desc}</p>
							<CotizarBtn type={id} title={title} className={classes.ServiceButton} />
						</Card>
					))}
				</div>
				<Link to="/productos" className={classes.ServicesBtn}>
					Todos los productos
					<i className="fa-solid fa-chevron-right"></i>
				</Link>
			</section>
			<section className={classes.OfferSection}>
				<h2>¿Qué te ofrecemos?</h2>
				<ul className={classes.OfferItemsCont}>
					<ListItem
						icon="fa-solid fa-stopwatch"
						text="Atención inmediata y altamente calificada para tus requerimientos."
						className={classes.OfferItem}
					/>
					<ListItem
						icon="fa-solid fa-clock"
						text="Te asesoramos y estamos disponibles para ti las 24 horas del día, los 365 días del año."
						className={classes.OfferItem}
					/>
					<ListItem
						icon="fa-solid fa-file-circle-check"
						text="Somos resolutivos, con el objetivo de otorgarte la mejor experiencia en tus trámites."
						className={classes.OfferItem}
					/>
					<ListItem
						icon="fa-solid fa-hand-holding-dollar"
						text="Precios competitivos en el mercado con pólizas y Aseguradoras de calidad."
						className={classes.OfferItem}
					/>
					<ListItem
						icon="fa-solid fa-handshake"
						text="Nuestras acciones se basan teniendo como Norte una relación confiable y duradera contigo y tus asegurados."
						className={classes.OfferItem}
					/>
					<ListItem
						icon="fa-solid fa-file-signature"
						text="Convenios con los principales bancos del país para proporcionarte mayor facilidad en el pago de tus pólizas."
						className={classes.OfferItem}
					/>
				</ul>
			</section>
			<Publicity />
		</>
	);
}

export default Home;
