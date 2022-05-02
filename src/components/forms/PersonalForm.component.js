import Beneficiario from "../Beneficiaries.component";
// CLASSES
import classes from "./modules/PersonalForm.module.scss";

function PersonalForm({ type, titular, beneficiaries, addBeneficiary, editBeneficiary, removeBeneficiary, today, onChange }) {
  return (
    <fieldset className={classes.PersonalForm}>
      <label>Profesión u ocupación:
        <input type="text" name="ocupacion" required />
      </label>
      {/* TITULAR PÓLIZA */}
      <label htmlFor="select-titular" className={classes.TitularLabel}>Titular de la póliza:</label>
      <select name="titular" required onChange={onChange}>
        <option value="" defaultValue>Seleccione el titular de la póliza</option>
        <option value="titular-mismo">Yo voy a ser el titular de la póliza</option>
        <option value="titular-tercero">Otra persona va a ser el titular de la póliza</option>
      </select>
      {titular && (
        <fieldset className={classes.Titular}>
          <legend>Datos del titular</legend>
          {titular === "titular-tercero" && (
            <>
              <label>Nombre:
                <input type="text" name="nombre-titular" onChange={onChange} required />
              </label>
              <label>Apellido:
                <input type="text" name="apellido-titular" onChange={onChange} required />
              </label>
            </>
          )}
          <label>Fecha de nacimiento:
            <input type="date" name="nacimiento-titular" max={today} onChange={onChange} required />
          </label>
          <fieldset className={classes.Gender}>
            <legend>Género:</legend>
            <div>
              <span title="Masculino">
                <input type="radio" name="genero-titular" id="masculino" value="masculino" onChange={onChange} required />
                <label htmlFor="masculino">M</label>
              </span>
              <span title="Femenino">
                <input type="radio" name="genero-titular" id="femenino" value="femenino" onChange={onChange} required />
                <label htmlFor="femenino">F</label>
              </span>
            </div>
          </fieldset>
        </fieldset>
      )}
      {!["personalAccs", "helpCancer", "life"].includes(type) && (
        <>
          {beneficiaries.length > 0 && (
            <>
              <hr />
              <legend>Beneficiarios</legend>
            </>
          )}
          {beneficiaries.length > 0 && beneficiaries.map((beneficiary, i) => (
            <Beneficiario
              key={beneficiary.id}
              order={i}
              beneficiary={beneficiary}
              editBeneficiary={editBeneficiary}
              removeBeneficiary={removeBeneficiary}
              maxDate={today}
              onChange={onChange} />
          ))}
          <button type="button" onClick={addBeneficiary}>Añadir miembro familiar</button>
        </>
      )}
    </fieldset>
  );
}

export default PersonalForm;