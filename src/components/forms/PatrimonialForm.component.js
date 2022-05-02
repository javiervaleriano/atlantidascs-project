// HOOKS
import { useDisableInputScroll } from "../../shared/hooks/useDisableInputScroll";
// CLASSES
import classes from "./modules/PatrimonialForm.module.scss";

function PatrimonialForm({ type, calcContPatrimonial, onChange }) {
  const [dScrollAproxUSD] = useDisableInputScroll(),
    [dScrollAproxMeters] = useDisableInputScroll();

  return (
    <fieldset className={classes.PatrimonialForm}>
      {type === "residential" && (
        <>
          <label htmlFor="tipo-vivienda" className={classes.TypeHomeLabel}>Tipo de vivienda:</label>
          <select name="tipo-vivienda" id="tipo-vivienda" className={classes.PatrimonialSelect} onChange={onChange} required>
            <option value="" defaultValue>Seleccione el tipo de vivienda</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
          </select>
        </>
      )}
      <label>Dirección del inmueble a asegurar:
        <input
          type="text"
          name="direccion"
          placeholder={type === "residential" ? "Sector, calle o nro de casa" : "Sector o calle"}
          onChange={onChange}
          required />
      </label>
      <label>Valor del inmueble:
        <input
          type="number"
          name="valor-inmueble-USD"
          min="0"
          placeholder="Aproximado en USD"
          onChange={onChange}
          required
          ref={dScrollAproxUSD} />
      </label>
      <label>Metros cuadrados:
        <input
          type="number"
          name="metros-cuadrados"
          min="0"
          placeholder="Aproximado"
          onChange={onChange}
          required
          ref={dScrollAproxMeters} />
      </label>
      <fieldset>
        <legend>Cálculo del contenido</legend>
        <p>¿Deseas que la compañía de Seguros realice un cálculo aproximado del valor del contenido?</p>
        <div>
          <span>
            <input
              type="radio"
              name="calculo-contenido"
              id="calculo-si"
              value="si"
              required
              onChange={onChange} />
            <label htmlFor="calculo-si">Sí</label>
          </span>
          <span>
            <input
              type="radio"
              name="calculo-contenido"
              id="calculo-no"
              value="no"
              required
              onChange={onChange} />
            <label htmlFor="calculo-no">No</label>
          </span>
        </div>
      </fieldset>
      {calcContPatrimonial === "no" && (
        <label>Valor del contenido:
          <input
            type="number"
            name="valor-contenido-USD"
            min="0"
            placeholder="Aproximado en USD"
            onChange={onChange}
            required />
        </label>
      )}
      {type === "residential" && (
        <>
          <label htmlFor="select-uso-inmueble" className={classes.PropertyUseLabel}>Uso del inmueble</label>
          <select name="uso-inmueble" id="select-uso-inmueble" className={classes.PatrimonialSelect} onChange={onChange} required>
            <option value="" defaultValue>Seleccione una opción</option>
            <option value="residencial">Residencial</option>
            <option value="vacacional">Vacacional</option>
          </select>
        </>
      )}
    </fieldset>
  );
}

export default PatrimonialForm;