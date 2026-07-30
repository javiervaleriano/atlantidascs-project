import { useState } from "react";
// SWEET ALERT
import Swal from "sweetalert2";
// HELPERS
import { currentYear } from "../shared/helpers/helpDate";
import { helpTodayDate } from "../shared/helpers/helpTodayDate";
// HOOKS
import { useDisableInputScroll } from "../shared/hooks/useDisableInputScroll";
import { useSiteConfig } from "../shared/hooks/useSiteConfig";
// HELPERS
import { OCCIDENTE, VENEZUELA_STATES, getRegionByState } from "../shared/helpers/helpRegion";
import { MUNICIPIOS_BY_STATE } from "../shared/helpers/helpMunicipios";
// COMPONENTS
import AutoForm from "./forms/AutoForm.component";
import CargoForm from "./forms/CargoForm.component";
import FianzaForm from "./forms/FianzaForm.component";
import PatrimonialForm from "./forms/PatrimonialForm.component";
import PersonalForm from "./forms/PersonalForm.component";
// ENVS
import { BACKEND_URL_MAIL } from "../envVars";
// CLASSES
import classes from "./modules/Form.module.scss";

const OTRO_MUNICIPIO = "Otro";

function Form({ formType, typeProduct, title, openedModal }) {
  // VARIABLES
  const personal = ["personalAccs", "health", "travel", "dental", "life", "funerary", "helpCancer"],
    patrimonial = ["industryCommerce", "residential"];

  const [beneficiaries, setBeneficiaries] = useState([]),
    [enabledForm, setEnabledForm] = useState(true),
    [dScrollDoc] = useDisableInputScroll();

  // Correos corporativos, leídos en tiempo de ejecución desde /config.json
  const [mailConfig, mailConfigError] = useSiteConfig();

  // HELPERS
  const today = helpTodayDate(),
    maxYear = currentYear() + 1;

  // FORM INITIAL VALUES
  const [form, setForm] = useState({
    "tipo-de-producto": title,
  });

  // HANDLERS
  const changeValueInputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const changeEstadoHandler = (e) => {
    const formStateCopy = { ...form, estado: e.target.value };

    // El municipio (y su valor libre "Otro") ya no aplica al cambiar de estado
    delete formStateCopy.municipio;
    delete formStateCopy["municipio-otro"];

    setForm(formStateCopy);
  };

  const changeMunicipioHandler = (e) => {
    const formStateCopy = { ...form, municipio: e.target.value };

    if (e.target.value !== OTRO_MUNICIPIO) delete formStateCopy["municipio-otro"];

    setForm(formStateCopy);
  };

  const addBeneficiaryHandler = () => {
    let newBenefs = [...beneficiaries],
      newBenef = {
        id: Date.now(),
        parentesco: "",
        fechaNacimiento: "",
      };

    newBenefs.push(newBenef);
    setBeneficiaries(newBenefs);
  };

  const editBeneficiaryHandler = (after) => {
    let updatedBenefs = [...beneficiaries].map(before => before.id === after.id ? after : before);
    setBeneficiaries(updatedBenefs);
  };

  const removeBeneficiaryHandler = (props, id) => {
    setBeneficiaries([...beneficiaries].filter(({ id: benefId }) => benefId !== id));

    const [firstProp, secondProp] = props,
      formStateCopy = { ...form };

    delete formStateCopy[firstProp];
    delete formStateCopy[secondProp];

    setForm(formStateCopy);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    // Deshabilita el botón de envío de formulario
    setEnabledForm(false);

    const targetEmail = formType === "contact"
      ? mailConfig?.CONTACT_EMAIL
      : getRegionByState(form.estado) === OCCIDENTE
        ? mailConfig?.QUOTATION_EMAIL_OCCIDENTE
        : mailConfig?.QUOTATION_EMAIL_ORIENTE;

    if (!targetEmail) {
      setEnabledForm(true);

      Swal.fire({
        title: "Oops!",
        text: "Esta cotización aún no puede procesarse para tu ubicación. Por favor contáctanos por WhatsApp o a los números que se encuentran a pie de página.",
        icon: "error",
        iconColor: "#ff0000",
        confirmButtonText: "De acuerdo",
        confirmButtonColor: "#007bff"
      });

      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL_MAIL}/${formType || 'quotation'}/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      }),
        resJson = await response.json();

      if (!response.ok) throw new Error(resJson.err);

      if (openedModal) openedModal(false);

      Swal.fire({
        title: "Formulario enviado correctamente",
        text: "Nos pondremos en contacto contigo lo antes posible. Gracias por tu interés en nuestro servicio.",
        icon: "success",
        iconColor: "#28a745",
        confirmButtonText: "De acuerdo",
        confirmButtonColor: "#41a15d"
      });

      if (formType === "contact") e.target.reset();

    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Oops!",
        text: "Hubo un error al enviar tu formulario. Por favor, vuelve a intentarlo más tarde. Si el problema persiste, contáctanos por WhatsApp o a los números que se encuentran a pie de página.",
        icon: "error",
        iconColor: "#ff0000",
        confirmButtonText: "De acuerdo",
        confirmButtonColor: "#007bff"
      });

    } finally {
      setEnabledForm(true);
    };
  };

  return (
    <form className={classes.Form} onSubmit={submitFormHandler}>
      <legend className={classes.ProductType}>{title}</legend>
      {formType === "product" && (
        <input
          type="hidden"
          name="tipo-de-producto"
          value={title}
          onChange={changeValueInputHandler} />
      )}
      <label><span>Nombre:</span>
        <input
          type="text"
          name="nombre"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
          title="Escribe un nombre válido"
          onChange={changeValueInputHandler}
          required />
      </label>
      <label><span>Apellido:</span>
        <input
          type="text"
          name="apellido"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
          title="Escribe un apellido válido"
          onChange={changeValueInputHandler}
          required />
      </label>
      <label className={classes.DocumentInputs}><span>Documento:</span>
        <select
          name="tipo-documento"
          onChange={changeValueInputHandler}
          required>
          <option value="" defaultValue>-</option>
          <option value="V">V</option>
          <option value="E">E</option>
          <option value="J">J</option>
        </select>
        <input
          type="text"
          name="numero-documento"
          pattern="^(\d{1,10})$|^(\d{1,10}-\d{1,1})$"
          title="Escribe un número de documento válido"
          onChange={changeValueInputHandler}
          required
          ref={dScrollDoc} />
      </label>
      <label><span>Correo electrónico:</span>
        <input
          type="email"
          name="correo"
          placeholder="johndoe@example.com"
          pattern="^[\w.\-]+@[a-z\d.\-]+\.[a-z]{2,}$"
          title="Escribe una dirección de correo electrónico válida"
          onChange={changeValueInputHandler}
          required />
      </label>
      <label><span>Teléfono celular:</span>
        <input
          type="tel"
          name="telefono"
          placeholder="0412-1234567"
          pattern="^(04|02)\d{2,2}-?\d{7,7}$"
          title="El número de teléfono debe ser de 11 caracteres y comenzar en 04 ó 02"
          onChange={changeValueInputHandler}
          required />
      </label>
      {formType === "product" && (
        <label><span>Estado:</span>
          <select
            name="estado"
            onChange={changeEstadoHandler}
            required>
            <option value="">-</option>
            {VENEZUELA_STATES.map(({ value }) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
      )}
      {formType === "product" && (
        <label><span>Municipio:</span>
          <select
            key={form.estado || "sin-estado"}
            name="municipio"
            onChange={changeMunicipioHandler}
            disabled={!form.estado}
            required>
            <option value="">{form.estado ? "-" : "Primero selecciona un estado"}</option>
            {(MUNICIPIOS_BY_STATE[form.estado] || []).map((municipio) => (
              <option key={municipio} value={municipio}>{municipio}</option>
            ))}
            <option value={OTRO_MUNICIPIO}>Otro</option>
          </select>
        </label>
      )}
      {formType === "product" && form.municipio === OTRO_MUNICIPIO && (
        <label><span>Especifica tu municipio:</span>
          <input
            type="text"
            name="municipio-otro"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
            title="Escribe un municipio válido"
            onChange={changeValueInputHandler}
            required />
        </label>
      )}
      {formType === "contact" && (
        <label><span>Mensaje:</span>
          <textarea
            className={classes.TextArea}
            name="mensaje-de-contacto"
            minLength="1"
            maxLength="255"
            title="Longitud máxima de 255 caracteres"
            onChange={changeValueInputHandler}
            required></textarea>
        </label>
      )}

      {personal.includes(typeProduct) ? (
        <PersonalForm
          type={typeProduct}
          titular={form.titular}
          beneficiaries={beneficiaries}
          addBeneficiary={addBeneficiaryHandler}
          editBeneficiary={editBeneficiaryHandler}
          removeBeneficiary={removeBeneficiaryHandler}
          today={today}
          onChange={changeValueInputHandler} />
      )
        : patrimonial.includes(typeProduct)
          ? (
            <PatrimonialForm
              type={typeProduct}
              calcContPatrimonial={form["calculo-contenido"]}
              onChange={changeValueInputHandler} />
          )
          : typeProduct === "autoMobile"
            ? (
              <AutoForm maxDate={today} maxYear={maxYear} onChange={changeValueInputHandler} />
            )
            : typeProduct === "cargoInsurance"
              ? (
                <CargoForm asureFlete={form["asegurar-el-flete"]} onChange={changeValueInputHandler} />
              )
              : typeProduct === "bonds"
                ? (
                  <FianzaForm onChange={changeValueInputHandler} />
                ) : null}
      <button type="submit" className={classes.FormButton} disabled={!enabledForm || !mailConfig}>
        {formType === "contact" ? "Enviar" : "¡Solicitar cotización!"}
      </button>
      {mailConfigError && (
        <p className={classes.ConfigError}>
          No se pudo cargar la configuración del formulario. Por favor recarga la página o contáctanos por WhatsApp.
        </p>
      )}
    </form>
  );
}

export default Form;