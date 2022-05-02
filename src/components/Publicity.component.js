// ASSETS
import Asis24Logo from "../assets/images/publicity/logo_asis24.png";
import PagoInsibsLogo from "../assets/images/publicity/logo_pago-insibs.png";
// CLASSES
import classes from "./modules/Publicity.module.scss";

function Publicity({ className }) {
  return (
    <section className={`${classes.Publicity} ${className ? className : ""}`}>
      <h2>Nuestras empresas aliadas</h2>
      <figure>
        <img src={Asis24Logo} alt="Logo de ASIS 24" />
        <figcaption>
          Siéntete respaldado todo el día con la mejor Atención al Cliente, con ASIS24.
        </figcaption>
      </figure>
      <figure>
        <a href="https://pagoinsibs.com/" target="_blank" rel="noreferrer">
          <img src={PagoInsibsLogo} alt="Logo de Pago INSIBS" />
        </a>
        <figcaption>
          Domicilia tus cuotas, realiza tus pagos y haz transacciones de forma segura y rápida a través del mejor servicio de cobranza en <a href="https://pagoinsibs.com/" target="_blank" rel="noreferrer">
            PAGO INSIBS
          </a>.
        </figcaption>
      </figure>
    </section>
  );
}

export default Publicity;