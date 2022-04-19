// HELPERS
import { currentYear } from "../../helpers/helpDate";
// CLASSES
import classes from "./modules/Footer.module.scss";
// COMPONENTS
import NavigationLinks from "./NavigationLinks.component";

function Footer() {
	return (
		<footer className={`py-2 py-md-3 ${classes.Footer}`}>
			<div
				className={`mb-3 mb-xl-4 border-bottom d-flex justify-content-between justify-content-xl-around ${classes.ContainerGrid}`}
			>
				<ul className="nav flex-column flex-md-row justify-content-center pb-3">
					<NavigationLinks className={classes.FooterLink} />
				</ul>
				<ul className="col-md-2 justify-content-md-end list-unstyled d-flex flex-column flex-md-row mx-auto mx-md-0 pt-2">
					<li className={`ms-3 ${classes.IconGrid}`}>
						<i className="fa-solid fa-envelope"></i>
						<a href="mailto:contacto@atlantidascs.com">Escríbenos al correo</a>
					</li>
					<li className={`ms-3 ${classes.IconGrid}`}>
						<i className="fa-solid fa-phone"></i>
						<a href="tel:+582129515081">(0212) 951.50.81</a>
						<a href="tel:+582129517361">(0212) 951.73.61</a>
					</li>
				</ul>
			</div>
			<p className="text-center mb-2 mb-xl-1">
				© ATLÁNTIDA | Todos los derechos reservados, {currentYear()}
			</p>
		</footer>
	);
}

export default Footer;
