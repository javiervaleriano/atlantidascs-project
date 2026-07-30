import { useState } from "react";
// SWEET ALERT
import Swal from "sweetalert2";
// HELPERS
import { VENEZUELA_STATES, getRegionByState, OCCIDENTE } from "../../shared/helpers/helpRegion";
import { MUNICIPIOS_BY_STATE } from "../../shared/helpers/helpMunicipios";
// HOOKS
import { useSiteConfig } from "../../shared/hooks/useSiteConfig";
// ENVS
import { BACKEND_URL_MAIL } from "../../envVars";
// CLASSES
import classes from "../modules/QuickCaptureForm.module.scss";

const OTRO_MUNICIPIO = "Otro";

function QuickCaptureForm({ typeProduct, title, partnerName, selfServiceUrl, openedModal }) {
  const [enabledForm, setEnabledForm] = useState(true);
  const [mailConfig] = useSiteConfig();

  const [form, setForm] = useState({
    "tipo-de-producto": title,
  });

  const changeHandler = (e) => {
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

  const submitHandler = async (e) => {
    e.preventDefault();
    setEnabledForm(false);

    const targetEmail = getRegionByState(form.estado) === OCCIDENTE
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
      const response = await fetch(`${BACKEND_URL_MAIL}/selfservice/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          "partner-name": partnerName,
          "partner-url": selfServiceUrl,
        }),
      });

      if (!response.ok) {
        const resJson = await response.json();
        throw new Error(resJson.err || "Error al enviar");
      }

      if (openedModal) openedModal(false);

      // Mostrar éxito y ofrecer redirigir a la aseguradora
      Swal.fire({
        title: "¡Gracias por tu interés!",
        text: `Has sido redirigido/a a ${partnerName} para completar tu cotización en línea.`,
        icon: "success",
        iconColor: "#28a745",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#41a15d",
      });

      if (selfServiceUrl) window.open(selfServiceUrl, "_blank");
      
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Oops!",
        text: "Hubo un error al enviar tu información. Por favor, vuelve a intentarlo más tarde.",
        icon: "error",
        iconColor: "#ff0000",
        confirmButtonText: "De acuerdo",
        confirmButtonColor: "#007bff"
      });
    } finally {
      setEnabledForm(true);
    }
  };

  return (
    <form className={classes.Form} onSubmit={submitHandler}>
      <legend className={classes.ProductType}>{title}</legend>
      <p className={classes.PartnerInfo}>
        Serás redirigido a <strong>{partnerName}</strong> para completar tu cotización en línea.
      </p>

      <label>
        <span>Nombre:</span>
        <input
          type="text"
          name="nombre"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
          title="Escribe un nombre válido"
          onChange={changeHandler}
          required
        />
      </label>
      <label>
        <span>Apellido:</span>
        <input
          type="text"
          name="apellido"
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
          title="Escribe un apellido válido"
          onChange={changeHandler}
          required
        />
      </label>
      <label>
        <span>Correo electrónico:</span>
        <input
          type="email"
          name="correo"
          placeholder="johndoe@example.com"
          pattern="^[\w.\-]+@[a-z\d.\-]+\.[a-z]{2,}$"
          title="Escribe una dirección de correo electrónico válida"
          onChange={changeHandler}
          required
        />
      </label>
      <label>
        <span>Teléfono celular:</span>
        <input
          type="tel"
          name="telefono"
          placeholder="0412-1234567"
          title="El número de teléfono debe ser de 11 caracteres y comenzar en 04 ó 02"
          pattern="^(04|02)\d{2}-?\d{7}$"
          onChange={changeHandler}
          required
          />
      </label>
      <label>
        <span>Estado:</span>
        <select
          name="estado"
          onChange={changeEstadoHandler}
          required
        >
          <option value="">-</option>
          {VENEZUELA_STATES.map(({ value }) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Municipio:</span>
        <select
          key={form.estado || "sin-estado"}
          name="municipio"
          onChange={changeMunicipioHandler}
          disabled={!form.estado}
          required
        >
          <option value="">{form.estado ? "-" : "Primero selecciona un estado"}</option>
          {(MUNICIPIOS_BY_STATE[form.estado] || []).map((municipio) => (
            <option key={municipio} value={municipio}>{municipio}</option>
          ))}
          <option value={OTRO_MUNICIPIO}>Otro</option>
        </select>
      </label>
      {form.municipio === OTRO_MUNICIPIO && (
        <label>
          <span>Especifica tu municipio:</span>
          <input
            type="text"
            name="municipio-otro"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"
            title="Escribe un municipio válido"
            onChange={changeHandler}
            required
          />
        </label>
      )}

      <input
        type="hidden"
        name="tipo-de-producto"
        value={title}
        onChange={changeHandler}
      />

      <button
        type="submit"
        className={classes.FormButton}
        disabled={!enabledForm || !mailConfig}
      >
        {enabledForm ? "Cotizar en línea ahora" : "Enviando..."}
      </button>
    </form>
  );
}

export default QuickCaptureForm;
