// CLASSES
import classes from "./modules/Loader.module.scss";

function Loader() {
  return (
    <div className={classes.Loader}>
      <div></div>
      <p>Cargando...</p>
    </div>
  );
}

export default Loader;