// HOOKS
import { useDisableInputScroll } from "../../shared/hooks/useDisableInputScroll";
// CLASSES
import classes from "./modules/CargoForm.module.scss";

function CargoForm({ asureFlete, onChange }) {
  const [dScrollShipment] = useDisableInputScroll();

  return (
    <fieldset className={classes.CargoForm}>
      <label>Tipo de mercancía:
        <input
          type="text"
          name="tipo-de-mercancia"
          pattern="^[\w\-\s]+$"
          title="Introduce el tipo de mercancía correcto"
          onChange={onChange}
          required />
      </label>
      <label>Valor del embarque:
        <input
          type="number"
          name="valor-del-embarque-USD"
          min="1"
          placeholder="Valor en USD"
          onChange={onChange}
          ref={dScrollShipment}
          required />
      </label>
      <fieldset className={classes.FieldRadio}>
        <legend>¿Desea asegurar el flete?</legend>
        <div>
          <span>
            <input
              type="radio"
              name="asegurar-el-flete"
              id="flete-si"
              value="si"
              onChange={onChange}
              required />
            <label htmlFor="flete-si">Sí</label>
          </span>
          <span>
            <input
              type="radio"
              name="asegurar-el-flete"
              id="flete-no"
              value="no"
              onChange={onChange}
              required />
            <label htmlFor="flete-no">No</label>
          </span>
        </div>
        {asureFlete === "si" && (
          <label className={classes.FreightValueInput}>Flete:
            <input
              type="number"
              name="valor-del-flete-USD"
              min="1"
              placeholder="Valor en USD"
              onChange={onChange}
              required />
          </label>
        )}
      </fieldset>
      <fieldset className={classes.FieldRadio}>
        <legend>Estado de los bienes</legend>
        <div>
          <span>
            <input
              type="radio"
              name="estado-de-los-bienes"
              id="estado-nuevo"
              value="nuevos"
              onChange={onChange}
              required />
            <label htmlFor="estado-nuevo">Nuevos</label>
          </span>
          <span>
            <input
              type="radio"
              name="estado-de-los-bienes"
              id="estado-usado"
              value="usados"
              onChange={onChange}
              required />
            <label htmlFor="estado-usado">Usados</label>
          </span>
        </div>
      </fieldset>
    </fieldset>
  );
}

export default CargoForm;