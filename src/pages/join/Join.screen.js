// COMPONENTS
import Form from "../../components/Form.component";
// CLASSES
import classes from "./modules/Join.module.scss";

function Join() {
  return (
    <>
      <article className={classes.Join}>
        <header>
          <iframe className={classes.Video} src="https://www.youtube.com/embed/WYxXkFuCobU?si=DQGoXezwpP6MEOE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <h1>Accede a nuestro entrenamiento GRATUITO para ser asesor de Seguros de Atlantida SCS</h1>
        </header>
        <p>Nuestra sociedad de corretaje de Seguros te da la oportunidad de formar parte de nuestro equipo de asesores, haciendo posible que la sociedad acceda a su protección personal. Buscamos a profesionales que quieran generar honorarios adicionales y convertirse en asesores de una carrera que contribuye al equilibrio social como lo es el mundo asegurador.</p>

        <p>Siendo nosotros los que educamos, asesoramos y patrocinamos al momento de aplicar estrategias para conseguir clientes.</p>
        <div className={classes.FormContainer}>
          <Form formType="join" />
        </div>
      </article>
    </>
  );
}

export default Join;