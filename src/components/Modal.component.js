import Card from "./Card.component";
import classes from "./modules/Modal.module.scss";

function Modal({ closeModal, children }) {
  return (
    <div className={classes.Backdrop} onClick={closeModal}>
      <Card className={classes.Modal}>
        <header>
          <button type="button" className="modal-close-btn" onClick={closeModal} title="Cerrar modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>
        {children}
      </Card>
    </div>
  );
}

export default Modal;