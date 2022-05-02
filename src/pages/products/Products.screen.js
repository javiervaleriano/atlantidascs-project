import React from "react";
import { Link } from "react-router-dom";
// PRODUCTS ASSETS
import accidentesPersonalesImg from "../../assets/images/products/accidentes-personales.jpg";
import automovilImg from "../../assets/images/products/automovil.jpg";
import ayudasCancerImg from "../../assets/images/products/ayudas-cancer.jpg";
import seguroCargaImg from "../../assets/images/products/carga.jpg";
import fianzasImg from "../../assets/images/products/fianzas.jpg";
import funerariosImg from "../../assets/images/products/funerarios.jpg";
import industriaComercioImg from "../../assets/images/products/industria-comercio.jpg";
import odontologicoImg from "../../assets/images/products/odontológico.jpg";
import residencialImg from "../../assets/images/products/residencial.jpg";
import saludImg from "../../assets/images/products/salud.jpg";
import viajeImg from "../../assets/images/products/viaje.jpg";
import vidaImg from "../../assets/images/products/vida.jpg";
// COMPONENTS
import Card from '../../components/Card.component';
import Companies from '../../components/Companies.component';
import CotizarBtn from '../../components/CotizarBtn.component';
// CLASSES
import classes from "./modules/Products.module.scss";

// VARIABLE AS DB
const products = [
  {
    id: "personalAccs",
    img: accidentesPersonalesImg,
    imgAlt: "Enfermera proporcionando un vendaje a un paciente",
    title: "Accidentes personales",
    desc: "¿Eres una persona expuesta a riesgos constantes?\n\nCon este producto te puedes proteger de situaciones incómodas y fortuitas.\n\nCuenta con indemnización diaria por hospitalización.",
  },
  {
    id: "autoMobile",
    img: automovilImg,
    imgAlt: "Parte frontal de un vehículo golpeado",
    title: "Automóvil",
    desc: "¿Quieres resguardar la integridad de tu vehículo?\n\nProtege los daños que se le puedan presentar en un accidente en instancias de conducción.\n\n• Cobertura amplia\n• Pérdida total\n• Responsabilidad Civil con exceso de límites para daños a bienes o personas",
  },
  {
    id: "helpCancer",
    img: ayudasCancerImg,
    imgAlt: "Lazo rosado en honor al cáncer encima de un par de manos",
    title: "Ayudas por cáncer",
    desc: "¿Sabías que una de cada cinco personas padece cáncer en algún momento de su vida? Ocasionando la muerte de uno de cada ocho hombres y una de cada once mujeres.\n\nCon este producto cubre los gastos relacionados a tus tratamientos oncológicos.",
  },
  {
    id: "cargoInsurance",
    img: seguroCargaImg,
    imgAlt: "Puerto de carga",
    title: "Seguros de Carga",
    desc: "¿Has planeado hacer un envío al exterior, pero quieres tener certeza del estado de tu mercancía?\n\nMantén protegido tu envío desde el sitio del despacho hasta el sitio de entrega.",
  },
  {
    id: "industryCommerce",
    img: industriaComercioImg,
    imgAlt: "Vista aeŕea del interior de un centro comercial",
    title: "Combinado de Industria y Comercio",
    desc: "¿Estás involucrado en el mundo del comercio y quieres asegurar todos tus bienes?\n\nProtege tu inversión y capital material con este producto.\n\n• Cobertura de Responsabilidad Civil\n• Cobertura de daños a mercancía",
  },
  {
    id: "residential",
    img: residencialImg,
    imgAlt: "Vista de edificios residenciales",
    title: "Combinado residencial",
    desc: "¿Quieres mantener la seguridad de tu hogar e inmuebles?\n\nCon este producto protege tu casa y tus bienes. Cubre:\n\n• Incendios\n• Daños por agua\n• Responsabilidad Civil general\n\nentre muchas más...",
  },
  {
    id: "bonds",
    img: fianzasImg,
    imgAlt: "Dos mujeres en el análisis de documentos",
    title: "Fianzas",
    desc: "Participa en tu licitación, facilita tus fianzas de anticipo y fiel cumplimiento, y retenciones laborales en tiempo récord.",
  },
  {
    id: "funerary",
    img: funerariosImg,
    imgAlt: "Ataúd en una iglesia",
    title: "Funerarios",
    desc: "¿Eres consciente de los gastos involucrados en el fallecimiento de una persona?\n\nCon este producto, administramos tu Suma Asegurada para cualquier tipo de evento:\n\n• Velación\n• Traslados\n• Parcelas\n• Cremación",
  },
  {
    id: "health",
    img: saludImg,
    imgAlt: "Doctor de brazos cruzados con un estetoscopio en mano",
    title: "Salud",
    desc: "¿Quieres tener resguardados tus gastos médicos en caso de alguna eventualidad?\n\nObtén asistencia médica (emergencia y cartas avales), así como asistencia domiciliaria y telemedicina.",
  },
  {
    id: "travel",
    img: viajeImg,
    imgAlt: "Hombre sentado en el aeropuerto viendo por la ventana a un avión en el aire",
    title: "Viaje",
    desc: "¿Te gusta viajar y también te gustaría estar seguro sin importar en qué parte del mundo te encuentres?\n\nProtege a tu familia y a ti cuando se encuentren de viaje fuera del país.\n\nCon cobertura para:\n\n• Repatriación sanitaria\n• Daños\n• Robo\n• Gastos médicos por hospitalización\n• Hospedaje",
  },
  {
    id: "dental",
    img: odontologicoImg,
    imgAlt: "Sala de odontología",
    title: "Servicio odontológico",
    desc: "¿Sabes lo costoso que puede ser una simple consulta diagnóstica?\n\nDisfruta de un servicio con validez a nivel nacional con los mejores centros odontológicos. Protege tu integridad y bienestar dental.",
  },
  {
    id: "life",
    img: vidaImg,
    imgAlt: "Padre con sus hijos en el campo",
    title: "Vida",
    desc: "Eres alguien que le gustaría asegurar la felicidad y confort de sus seres queridos, ¿cierto?\n\nProtege el bienestar de los tuyos en caso de un fallecimiento o incapacidad. Elige tus herederos y déjalos estables.",
  }
];

function Products() {
  return (
    <>
      <h1 className={classes.Title}>Productos</h1>
      <div className={classes.ProductsContainer}>
        {
          products.map(({ id, img, imgAlt, title, desc }) => {
            return (
              <Card key={id} className={classes.ProductCard}>
                <figure>
                  <img src={img} alt={imgAlt} loading="lazy" />
                </figure>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: desc.replaceAll("\n", "<br />") }} />
                <CotizarBtn type={id} title={title} className={classes.ProductBtn} />
              </Card>
            );
          })
        }
      </div>
      <p className={classes.GlossaryLink}>¿Te encuentras desorientado con los términos de Seguros? <Link to="/productos/glosario">Haz click aquí para ver un glosario</Link>.</p>
      <Companies />
    </>
  );
}

export default Products;