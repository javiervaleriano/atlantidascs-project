import React from 'react';
// CLASSES
import classes from "./modules/CotizarBtn.module.scss";

function CotizarBtn(type) {
  console.log(type);

  return (
    <button
      type="button"
      className={classes.CotizarBtn}
      onClick={() => console.log("¡A COTIZAR!")}>
      Cotizar
    </button>
  );
}

export default CotizarBtn;