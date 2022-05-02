// CLASSES
import { Link } from "react-router-dom";
import classes from "./modules/Error-404.module.scss";

function Error404() {
  return (
    <section className={classes.Error404}>
      <div>
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to="/">Regresar</Link>
      </div>
    </section>
  );
}

export default Error404;