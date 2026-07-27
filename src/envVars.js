const ENV = window.location.href.includes('localhost') ? 'DEV' : 'PROD';
const BACKEND_URL = ENV === 'DEV' ? 'http://localhost:8080' : 'https://atlantidascs-backend-production.up.railway.app';
const BACKEND_URL_MAIL = `${BACKEND_URL}/api/mail`;
// Los correos corporativos (CONTACT_EMAIL, QUOTATION_EMAIL_ORIENTE, QUOTATION_EMAIL_OCCIDENTE)
// ya no viven aquí: se leen en tiempo de ejecución desde /public/config.json (ver Form.component.js)
// para poder editarlos en el hosting sin recompilar ni resubir el build.

export {
  BACKEND_URL,
  BACKEND_URL_MAIL,
  ENV
};

