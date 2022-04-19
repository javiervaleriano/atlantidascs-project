import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import AtrioSeguros from "../../assets/images/aseguradoras/atrio_seguros_logo.png";
import BanescoSeguros from "../../assets/images/aseguradoras/banesco_seguros_logo.png";
import EstarSeguros from "../../assets/images/aseguradoras/estarseguros_logo.jpg";
import HispanaSeguros from "../../assets/images/aseguradoras/hispana_logo.png";
import Iberoseguros from "../../assets/images/aseguradoras/iberoseguros_logo.png";
import SegurosCaracas from "../../assets/images/aseguradoras/logo_seguros_caracas.svg";
import Universitas from "../../assets/images/aseguradoras/logo_universitas.svg";
import Mapfre from "../../assets/images/aseguradoras/mapfre_logo.svg";
import Mercantil from "../../assets/images/aseguradoras/mercantil_logo.svg";
import NuevoMundo from "../../assets/images/aseguradoras/nuevo_mundo_logo.jpg";
import Oriental from "../../assets/images/aseguradoras/oriental_seguros_logo.svg";
import Piramide from "../../assets/images/aseguradoras/piramide_seguros_logo.svg";
import Venezuela from "../../assets/images/aseguradoras/seguros_venezuela.jpg";
import Uniseguros from "../../assets/images/aseguradoras/uniseguros_logo.png";
import VenezolanaSeguros from "../../assets/images/aseguradoras/venezolana_seguros_logo.jpg";
import Card from "../../components/Card.component";
import ListItem from "../../components/ListItem.component";
// CLASSES
import classes from "./modules/home.screen.module.scss";

function Home() {
	return (
		<>
			<section className={`px-3 py-5 ${classes.HeroContainer}`}>
				<div className={classes.Hero}>
					<h2 className="fw-normal">Asesoría e Intermediación de Seguros</h2>
					<h1 className="fw-bold">
						ATLÁNTIDA
						<br />
						Sociedad de Corretaje de Seguros
					</h1>
					<span className={`mx-auto mx-md-0 ${classes.HeroDivide}`}></span>
					<div className="col-lg-6 mx-auto mx-md-0">
						<p className={`mb-4 ${classes.HeroPgph}`}>
							Asegúrate con nosotros,
							<br />
							con las mejores coberturas al mejor precio.
						</p>
					</div>
				</div>
			</section>
			<section className={classes.CompaniesSection}>
				<h2>Las mejores Aseguradoras del país trabajan con nosotros</h2>
				<div className={classes.CompaniesSlider}>
					<button type="button">
						<i className="fa-solid fa-chevron-left"></i>
					</button>
					<figure className={classes.CompaniesContainer}>
						<img src={AtrioSeguros} alt="" />
						<img src={BanescoSeguros} alt="" />
						<img src={EstarSeguros} alt="" />
						<img src={HispanaSeguros} alt="" />
						<img src={Iberoseguros} alt="" />
						<img src={VenezolanaSeguros} alt="" />
						<img src={Mapfre} alt="" />
						<img src={Mercantil} alt="" />
						<img src={NuevoMundo} alt="" />
						<img src={Oriental} alt="" />
						<img src={SegurosCaracas} alt="" />
						<img src={Universitas} alt="" />
						<img src={Venezuela} alt="" />
						<img src={Piramide} alt="" />
						<img src={Uniseguros} alt="" />
					</figure>
					<button type="button">
						<i className="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</section>
			<section className={classes.ServicesSection}>
				<h2>Adquiere nuestras mejores pólizas</h2>
				<div className={classes.CardsContainer}>
					<Card className={classes.ServiceCard}>
						<i class="fa-solid fa-car"></i>
						<h3>Automóvil</h3>
						<p>Asegura tu vehículo y viaja con tranquilidad.</p>
						<button type="button" className={classes.CotizarBtn}>
							Cotizar
						</button>
					</Card>
					<Card className={classes.ServiceCard}>
						<i class="fa-solid fa-stethoscope"></i>
						<h3>Salud</h3>
						<p>Asegura tu bienestar y el de tus seres queridos.</p>
						<button type="button" className={classes.CotizarBtn}>
							Cotizar
						</button>
					</Card>
					<Card className={classes.ServiceCard}>
						<i class="fa-solid fa-skull"></i>
						<h3>Funerarios</h3>
						<p>
							Obtén tranquilidad respaldando a tu grupo familiar con una póliza
							de Servicio Funerario.
						</p>
						<button type="button" className={classes.CotizarBtn}>
							Cotizar
						</button>
					</Card>
				</div>
				<Link to="/servicios" className={classes.ServicesBtn}>
					Todos los servicios
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
		</>
	);
}

export default Home;
