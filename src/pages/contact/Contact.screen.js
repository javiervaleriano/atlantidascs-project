// COMPONENTS
import Form from "../../components/Form.component";
import Publicity from "../../components/Publicity.component";
// CLASSES
import classes from "./modules/Contact.module.scss";

function Contact() {
  return (
    <>
      <article className={classes.Contact}>
        <h1>Contáctanos</h1>
        <div>
          <section>
            <h2><i className="fa-solid fa-phone"></i> Teléfonos</h2>
            <ul className={classes.ContactPhones}>
              <li>
                <a href="tel:+582129515081">(0212) 951.50.81</a>
              </li>
              <li>
                <a href="tel:+852129517361">(0212) 951.73.61</a>
              </li>
            </ul>
          </section>
          <section>
            <h2><i className="fa-solid fa-location-dot"></i> Dirección:</h2>
            <address><span>Caracas:</span> Urbanización El Rosal, avenida Tamanaco, edificio La Unión. Piso 2, oficina 2-A.</address>
          </section>
        </div>
        <section>
          <h2><i className="fa-solid fa-message"></i> Déjanos un mensaje</h2>
          <div className={classes.FormContainer}>
            <Form formType="contact" />
          </div>
        </section>
      </article>
      <Publicity className={classes.BackgroundGradient} />
    </>
  );
}

export default Contact;