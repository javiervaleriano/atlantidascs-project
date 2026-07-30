import React, { useState } from "react";
// COMPONENTS
import Card from "../../components/Card.component";
import SelfServiceBtn from "../../components/SelfServiceBtn.component";
// HOOKS
import { useSiteConfig } from "../../shared/hooks/useSiteConfig";
// ASSETS
import automovilImg from "../../assets/images/products/automovil.jpg";
// CLASSES
import classes from "./modules/SelfService.module.scss";

const PRODUCT_IMAGES = {
  autoMobile: automovilImg,
  rcv: automovilImg,
};

const PRODUCT_NAMES = {
  autoMobile: "Automóvil",
  rcv: "RCV - Responsabilidad Civil",
  health: "Salud",
  travel: "Viaje",
  personalAccs: "Accidentes personales",
  life: "Vida",
  residential: "Combinado residencial",
  industryCommerce: "Combinado de Industria y Comercio",
  cargoInsurance: "Seguros de Carga",
  bonds: "Fianzas",
  funerary: "Funerarios",
  dental: "Servicio odontológico",
  helpCancer: "Ayudas por cáncer",
};

function SelfService() {
  const [mailConfig] = useSiteConfig();
  const [logosFailed, setLogosFailed] = useState({});
  const partners = mailConfig?.PARTNERS || [];

  const handleLogoError = (partnerId) => {
    setLogosFailed((prev) => ({ ...prev, [partnerId]: true }));
  };

  if (partners.length === 0) {
    return (
      <div className={classes.Empty}>
        <h1 className={classes.Title}>Autogestión</h1>
        <p className={classes.EmptyText}>
          Pronto tendremos disponibles opciones para que puedas cotizar y contratar en línea por tu cuenta.
        </p>
      </div>
    );
  }

  return (
    <section className={classes.Section}>
      <h1 className={classes.Title}>Autogestión</h1>
      <p className={classes.Subtitle}>
        Cotiza y contrata en línea por tu cuenta de forma rápida y segura con nuestras aseguradoras aliadas.
      </p>

      {partners.map((partner) => {
        const showLogo = partner.logo && !logosFailed[partner.id];

        return (
        <article key={partner.id} className={classes.PartnerSection}>
          <header className={classes.PartnerHeader}>
            <div className={classes.PartnerInfo}>
              {showLogo ? (
                <figure className={classes.PartnerLogoWrapper}>
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className={classes.PartnerLogo}
                    loading="lazy"
                    onError={() => handleLogoError(partner.id)}
                  />
                </figure>
              ) : (
                <h2 className={classes.PartnerNameText}>{partner.name}</h2>
              )}
              {partner.description && (
                <p className={classes.PartnerDesc}>{partner.description}</p>
              )}
            </div>
          </header>

          <div className={classes.ProductsGrid}>
            {partner.products.map((productId) => (
              <Card key={productId} className={classes.ProductCard}>
                {PRODUCT_IMAGES[productId] && (
                  <figure className={classes.ProductFigure}>
                    <img
                      src={PRODUCT_IMAGES[productId]}
                      alt={PRODUCT_NAMES[productId] || productId}
                      loading="lazy"
                    />
                  </figure>
                )}
                <h3 className={classes.ProductTitle}>
                  {PRODUCT_NAMES[productId] || productId}
                </h3>
                <SelfServiceBtn
                  type={productId}
                  title={PRODUCT_NAMES[productId] || productId}
                  partnerId={partner.id}
                  className={classes.SelfBtn}
                />
              </Card>
            ))}
          </div>
        </article>
      );
      })}
    </section>
  );
}

export default SelfService;
