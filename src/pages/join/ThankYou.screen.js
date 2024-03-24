import { useContext } from "react";
// REACT ROUTER
import { Navigate, useNavigate } from "react-router-dom";
// CONTEXT
import ContextoGlobal from "../../store/ContextoGlobal";
// CLASSES
import classes from "./modules/ThankYou.module.scss";

function ThankYou() {
  const navigate = useNavigate();
  // CONSUME CONTEXT
  const { joinMailSent, setJoinMailSent } = useContext(ContextoGlobal);

  const redirectHome = () => {
    setJoinMailSent(false);
    navigate('/');
  };

  if (joinMailSent) {
    return (
      <>
        <article className={classes.ThankYou}>
          <header>
            <h1>¡Bienvenido a nuestra clase!</h1>
            <iframe className={classes.Video} src="https://www.youtube.com/embed/XAhZ15GHMVs?si=ZXwjfhV9HJ1wXjQg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </header>
          <p className={classes.Text}>
            <i className={`fa-solid fa-down-long ${classes.Icon}`}></i>
            Agenda tu llamada personalizada
            <i className={`fa-solid fa-down-long ${classes.Icon}`}></i>
          </p>
          <a className={classes.CustomCallBtn} href="https://calendly.com/atlantidascs" target="_blank" rel="noreferrer" onClick={redirectHome}>
            Agendar
          </a>
        </article>
      </>
    );
  } else {
    return <Navigate to="/" />
  }
}

export default ThankYou;