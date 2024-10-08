const ENV = window.location.href.includes('localhost') ? 'DEV' : 'PROD';
const BACKEND_URL = ENV === 'DEV' ? 'http://localhost:8080' : 'https://atlantidascs-backend-production.up.railway.app';
const BACKEND_URL_MAIL = `${BACKEND_URL}/api/mail`;
const CONTACT_EMAIL = 'contactoatlantidascss@gmail.com';
const QUOTATION_EMAIL = 'servicioatlantidascs@gmail.com';

export {
  BACKEND_URL,
  BACKEND_URL_MAIL,
  CONTACT_EMAIL, ENV, QUOTATION_EMAIL
};

