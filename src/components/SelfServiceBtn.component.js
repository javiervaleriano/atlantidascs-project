import React, { useContext, useMemo } from "react";
// CONTEXT
import ContextoGlobal from "../store/ContextoGlobal";
// HOOKS
import { useSiteConfig } from "../shared/hooks/useSiteConfig";
// COMPONENT
import QuickCaptureForm from "./forms/QuickCaptureForm.component";
// CLASSES
import classes from "./modules/SelfServiceBtn.module.scss";

function SelfServiceBtn({ type, title, partnerId, className }) {
  const { setModalContent, setModalIsOpen } = useContext(ContextoGlobal);
  const [mailConfig] = useSiteConfig();

  // Resuelve los datos del partner desde config.json en tiempo de ejecución.
  // Esto permite agregar nuevos partners editando solo el archivo en el hosting,
  // sin necesidad de recompilar ni resubir el build.
  const partner = useMemo(() => {
    if (!mailConfig?.PARTNERS) return null;
    return mailConfig.PARTNERS.find((p) => p.id === partnerId) || null;
  }, [mailConfig, partnerId]);

  if (!partner) return null;

  const openQuickCaptureHandler = () => {
    setModalContent(() => (
      <QuickCaptureForm
        typeProduct={type}
        title={title}
        partnerName={partner.name}
        selfServiceUrl={partner.selfServiceUrl}
        openedModal={setModalIsOpen}
      />
    ));
    setModalIsOpen(true);
  };

  return (
    <button
      type="button"
      className={`${classes.SelfServiceBtn}${className ? ` ${className}` : ""}`}
      onClick={openQuickCaptureHandler}
      title={`Cotizar en línea con ${partner.name}`}
    >
      Cotizar en línea
    </button>
  );
}

export default SelfServiceBtn;
