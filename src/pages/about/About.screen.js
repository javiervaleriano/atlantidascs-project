// COMPONENTS
import AtlantidaLogo from "../../assets/images/atlantida-logo.png";
import Card from "../../components/Card.component";
import Companies from "../../components/Companies.component";
// CLASSES
import classes from "./modules/About.module.scss";

function About() {
  return (
    <article className={classes.About}>
      <section>
        <h1>¡Somos Atlántida!</h1>
        <p>Somos una empresa con la capacidad de diseñar, estructurar e implementar los planes y programas de Seguros de cualquier modalidad, que sean adaptables y realmente requeridos por nuestros clientes, con la finalidad siempre de potenciar la empresa para llegar a mayor cantidad de personas necesitadas de protección para sí mismos y sus familiares.</p>
        <Card className={classes.ImgContainer}>
          <div>
            <img src={AtlantidaLogo} alt="Logo de Atlántida C.A." />
          </div>
        </Card>
      </section>
      <section>
        <h2><span>Más de 30 años</span> en el mercado asegurador</h2>
        <p><span>Atlántida C.A.</span> está siempre fiel a su compromiso de brindar el mejor servicio y diseñar productos adaptados a la realidad actual.</p>
        <p>Realizamos alianzas estratégicas con las aseguradoras de más prestigio en el país a fin de juntos garantizar productos de acuerdo a las características y necesidades específicas de nuestros actuales y potenciales clientes.</p>
      </section>
      <section>
        <h2>Nuestras funciones principales</h2>
        <ol>
          <li>
            <h3>Asesoramiento <span>oportuno</span></h3>
            <p>Brindamos un asesoramiento oportuno a todos nuestros asegurados y potenciales clientes en aquellos riesgos que le resulten más satisfactorios y convenientes a sus intereses.</p>
          </li>
          <li>
            <h3>Cubrimos tus <span>necesidades</span></h3>
            <p>Garantizamos a través de una búsqueda minuciosa, productos de acuerdo a las características y necesidades específicas de nuestra clientela.</p>
          </li>
          <li>
            <h3>Respaldo <span>garantizado</span></h3>
            <p>Controlamos y optimizamos los procesos a través de nuestro Call Center 24 horas, garantizando respaldo y calidad de servicio.</p>
          </li>
        </ol>
      </section>
      <section>
        <h2>Nos aliamos con lo mejor del mercado asegurador</h2>
        <p>Aliados con las mejores compañías del mercado asegurador, garantizamos el mejor respaldo y servicio a nuestros clientes.</p>
      </section>
      <Companies justSlider className={classes.CompaniesAbout} />
    </article>
  );
}

export default About;