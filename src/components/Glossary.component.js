// ASSETS
import Glosario_1 from "../assets/images/glosario_seguros/glosario_de_seguros-1.png";
import Glosario_2 from "../assets/images/glosario_seguros/glosario_de_seguros-2.png";
import Glosario_3 from "../assets/images/glosario_seguros/glosario_de_seguros-3.png";
import Glosario_4 from "../assets/images/glosario_seguros/glosario_de_seguros-4.png";
import Glosario_5 from "../assets/images/glosario_seguros/glosario_de_seguros-5.png";
// CLASSES
import classes from "./modules/Glossary.module.scss";

function Glossary() {
  return (
    <article className={classes.Glossary}>
      <h1>Glosario de términos de Seguros</h1>
      <figure>
        <img src={Glosario_1} alt="Página 1 del glosario" loading="lazy" />
        <img src={Glosario_2} alt="Página 2 del glosario" loading="lazy" />
        <img src={Glosario_3} alt="Página 3 del glosario" loading="lazy" />
        <img src={Glosario_4} alt="Página 4 del glosario" loading="lazy" />
        <img src={Glosario_5} alt="Página 5 del glosario" loading="lazy" />
      </figure>
    </article>
  );
}

export default Glossary;