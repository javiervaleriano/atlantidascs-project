// HOOKS
import { useDisableInputScroll } from "../../shared/hooks/useDisableInputScroll";
// CLASSES
import classes from "./modules/AutoForm.module.scss";

function AutoForm({ maxDate, maxYear, onChange }) {
  const [dScrollYear] = useDisableInputScroll();

  return (
    <fieldset className={classes.AutoForm}>
      <label>Fecha de nacimiento:
        <input
          type="date"
          name="fecha-nacimiento"
          max={maxDate}
          onChange={onChange}
          required />
      </label>
      <label htmlFor="select-edo-civil" className={classes.SelectLabel}>Estado civil:</label>
      <select name="estado-civil" id="select-edo-civil" onChange={onChange} required>
        <option value="" defaultValue>Seleccione su estado civil</option>
        <option value="soltero(a)">Soltero(a)</option>
        <option value="casado(a)">Casado(a)</option>
        <option value="divorciado(a)">Divorciado(a)</option>
        <option value="viudo(a)">Viudo(a)</option>
      </select>
      <fieldset className={classes.FieldGender}>
        <legend>Género:</legend>
        <div>
          <span title="Masculino">
            <input
              type="radio"
              name="genero"
              id="masculino"
              value="masculino"
              onChange={onChange}
              required />
            <label htmlFor="masculino">M</label>
          </span>
          <span title="Femenino">
            <input
              type="radio"
              name="genero"
              id="femenino"
              value="femenino"
              onChange={onChange}
              required />
            <label htmlFor="femenino">F</label>
          </span>
        </div>
      </fieldset>
      <fieldset className={classes.VehicleData}>
        <legend>Datos del vehículo</legend>
        <label>Marca:
          <input
            type="text"
            name="vehiculo-marca"
            onChange={onChange}
            required />
        </label>
        <label>Modelo:
          <input
            type="text"
            name="vehiculo-modelo"
            onChange={onChange}
            required />
        </label>
        <label>Año:
          <input
            type="number"
            name="vehiculo-año"
            minLength="4"
            maxLength="4"
            title={`El año debe ser entre 1850 y ${maxYear}`}
            min="1850"
            max={maxYear}
            onChange={onChange}
            ref={dScrollYear}
            required />
        </label>
        <label>Versión:
          <input
            type="text"
            name="vehiculo-version"
            onChange={onChange}
            required />
        </label>
        <label htmlFor="select-cobertura" className={classes.SelectLabel}>Cobertura deseada:</label>
        <select name="select-cobertura" onChange={onChange} required>
          <option value="" defaultValue>Seleccione su cobertura deseada</option>
          <option value="perdida-total">Pérdida total</option>
          <option value="cobertura-amplia">Cobertura amplia</option>
          <option value="rcv-con-grua">RCV con grúa</option>
          <option value="rcv-sin-grua">RCV sin grúa</option>
        </select>
        <fieldset className={classes.FieldShield}>
          <legend>¿Tiene blindaje?</legend>
          <div>
            <span>
              <input
                type="radio"
                name="vehiculo-blindado"
                id="blindaje-si"
                value="si"
                onChange={onChange}
                required />
              <label htmlFor="blindaje-si">Sí</label>
            </span>
            <span>
              <input
                type="radio"
                name="vehiculo-blindado"
                id="blindaje-no"
                value="no"
                onChange={onChange}
                required />
              <label htmlFor="blindaje-no">No</label>
            </span>
          </div>
        </fieldset>
      </fieldset>
    </fieldset>
  );
}

export default AutoForm;