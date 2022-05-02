// CLASSES
import classes from "./modules/Beneficiarios.module.scss";

function Beneficiario({ order, beneficiary, editBeneficiary, removeBeneficiary, maxDate, onChange }) {
  // INPUT NAMES
  const selectName = `beneficiario-${order + 1}-parentesco`,
    datepickerName = `beneficiario-${order + 1}-nacimiento`;

  // BENEFICIARY VALUES
  let { id, parentesco, fechaNacimiento } = beneficiary;

  // HANDLERS
  const selectHandler = (e) => {
    onChange(e);
    editBeneficiary({ ...beneficiary, parentesco: e.target.value });
  };

  const dateHandler = (e) => {
    onChange(e);
    editBeneficiary({ ...beneficiary, fechaNacimiento: e.target.value });
  };

  const deleteBtnHandler = () => removeBeneficiary([selectName, datepickerName], id);

  return (
    <fieldset className={classes.Beneficiary}>
      <span>
        <label htmlFor="parentesco">Parentesco:</label>
        <select name={selectName} id="parentesco" value={parentesco} onChange={selectHandler} className={classes.Parentage} required>
          <option value="" disabled defaultValue>Seleccione el parentesco</option>
          <option value="madre">Madre</option>
          <option value="padre">Padre</option>
          <option value="esposa">Esposa</option>
          <option value="esposo">Esposo</option>
          <option value="hija">Hija</option>
          <option value="hijo">Hijo</option>
          <option value="hermana">Hermana</option>
          <option value="hermano">Hermano</option>
          <option value="sobrina">Sobrina</option>
          <option value="sobrino">Sobrino</option>
        </select>
      </span>
      <span>
        <label>Fecha de nacimiento:
          <input type="date" name={datepickerName} value={fechaNacimiento} onChange={dateHandler} max={maxDate} required />
        </label>
      </span>
      <button type="button" onClick={deleteBtnHandler} className={classes.BeneficiaryBtn}>Eliminar</button>
    </fieldset>
  );
}

export default Beneficiario;