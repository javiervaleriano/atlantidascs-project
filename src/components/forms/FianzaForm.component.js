// CLASSES
import classes from "./modules/FianzaForm.module.scss";

function FianzaForm({ onChange }) {
  return (
    <fieldset className={classes.FianzaForm}>
      <label htmlFor="select-tipo-fianza" className={classes.FianzaLabel}>Tipo de fianza:</label>
      <select name="tipo-de-fianza" id="select-tipo-fianza" onChange={onChange} required>
        <option value="" defaultValue>Seleccione su tipo de fianza</option>
        <option value="licitacion">Licitación</option>
        <option value="anticipo-y-fiel-cumplimiento">Anticipo y fiel cumplimiento</option>
        <option value="importacion-y-judicial">Importación y judicial</option>
        <option value="laboral">Laboral</option>
      </select>
    </fieldset>
  );
}

export default FianzaForm;