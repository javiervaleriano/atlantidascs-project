// HELPERS
import { currentYear } from "../../shared/helpers/helpDate";
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
						<a href="mailto:contactoatlantidascss@gmail.com">Escríbenos al correo</a>
					</li>
					<li className={`ms-3 ${classes.IconGrid}`}>
						<i className="fa-solid fa-phone"></i>
						<a href="tel:+584122211457">(0412) 221.14.57</a>
						<a href="tel:+582432412289">(0243) 241.22.89</a>
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
