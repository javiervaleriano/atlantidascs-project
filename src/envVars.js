const ENV = window.location.href.includes('atlantidascs-dev') ? 'DEV' : 'PROD'; //localhost
const BACKEND_URL = ENV === 'DEV' ? 'https://atlantidascs-backend-develop.up.railway.app' : 'https://atlantidascs-backend-production.up.railway.app'; //http://localhost:8080
const BACKEND_URL_MAIL = `${BACKEND_URL}/api/mail`;
const CONTACT_EMAIL = 'contactoatlantidascss@gmail.com';
const QUOTATION_EMAIL = 'servicioatlantidascs@gmail.com';

export {
  BACKEND_URL,
  BACKEND_URL_MAIL,
  CONTACT_EMAIL, ENV, QUOTATION_EMAIL
};

