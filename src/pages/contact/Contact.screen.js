// HOOKS
import { useSiteConfig } from "../../shared/hooks/useSiteConfig";
// COMPONENTS
import Form from "../../components/Form.component";
import Publicity from "../../components/Publicity.component";
// CLASSES
import classes from "./modules/Contact.module.scss";

function Contact() {
  // Teléfonos y dirección, leídos en tiempo de ejecución desde /config.json
  const [config] = useSiteConfig();

  return (
    <>
      <article className={classes.Contact}>
        <h1>Contáctanos</h1>
        <div>
          <section>
            <h2><i className="fa-solid fa-phone"></i> Teléfonos</h2>
            <ul className={classes.ContactPhones}>
              {config?.CONTACT_PHONES?.map(({ label, tel }) => (
                <li key={tel}>
                  <a href={`tel:${tel}`}>{label}</a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2><i className="fa-solid fa-location-dot"></i> Dirección:</h2>
            <address><span>{config?.ADDRESS_LABEL}:</span> {config?.ADDRESS}</address>
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