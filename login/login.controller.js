import { loginUser } from './login.model.js';
import {
  constants,
  eventListeners,
  querySelectors,
  alertMessages,
} from '../utils/constants.js';
import { validationErrorEvent } from '../utils/errorEvents.js';

const validateFormData = (form) => {
  const errors = [];
  const email = form.querySelector(querySelectors.authenticateUser.email).value;
  const password = form.querySelector(querySelectors.authenticateUser.password).value;

  const emailRegExp = new RegExp(constants.mailRegExp);

  if (!emailRegExp.test(email)) {
    validationErrorEvent(
      eventListeners.login,
      alertMessages.login.invalidEmail,
      errors
    );
  }
  if (!password) {
    validationErrorEvent(
      eventListeners.login,
      alertMessages.login.invalidPassword,
      errors
    );
  }

  return { errors, email, password };
};

const handleLoginSubmit = async (event, form) => {
  event.preventDefault();

  const { errors, email, password } = validateFormData(form);

  errors.forEach((errorEvent) => {
    form.dispatchEvent(errorEvent);
  });
  if (errors.length === 0) {
    try {
      form.dispatchEvent(new CustomEvent(eventListeners.startLogin));

      const token = await loginUser(email, password);
      localStorage.setItem(constants.tokenKey, token);

      setTimeout(() => {
        window.location.href = '/';
      }, constants.redirectDelay);
    } catch (error) {
      const serverErrorEvent = new CustomEvent(eventListeners.login, {
        detail: {
          message: error.message,
          type: 'error',
        },
      });
      form.dispatchEvent(serverErrorEvent);
    } finally {
      form.dispatchEvent(new CustomEvent(eventListeners.finishLogin));
    }
  }
};
export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', (event) => handleLoginSubmit(event, loginForm));
};
