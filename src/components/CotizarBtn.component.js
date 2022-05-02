import React, { useContext } from "react";
// CONTEXT
import ContextoGlobal from "../store/ContextoGlobal";
// COMPONENT
import Form from "./Form.component";
// CLASSES
import classes from "./modules/CotizarBtn.module.scss";

function CotizarBtn({ type, title, className }) {
  // CONSUME CONTEXT
  const { setModalContent, setModalIsOpen } = useContext(ContextoGlobal);

  // HANDLER
  const openFormHandler = () => {
    setModalContent(() => <Form formType="product" typeProduct={type} title={title} openedModal={setModalIsOpen} />);
    setModalIsOpen(true);
  };

  return (
    <button
      type="button"
      className={`${classes.CotizarBtn}${className ? ` ${className}` : ""}`}
      onClick={openFormHandler}>
      Cotizar
    </button>
  );
}

export default CotizarBtn;