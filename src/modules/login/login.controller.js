import { loginUser } from './login.model.js';
import {
  constants,
  eventListeners,
  querySelectors,
  alertMessages,
} from '../../utils/constants.js';
import { validationErrorEvent } from '../../utils/error-events.js';

const successButton = (form) => {
  const button = form.querySelector('.btn-primary');
  button.classList.replace('btn-primary', 'btn-success');
  button.textContent = 'Has iniciado sesión';
  return button;
};

const validateFormData = (form) => {
  const errors = [];
  const email = form.querySelector(querySelectors.authenticateUser.email).value;
  const password = form.querySelector(querySelectors.authenticateUser.password).value;

  const emailRegExp = new RegExp(constants.mailRegExp);

  if (!emailRegExp.test(email)) {
    validationErrorEvent(
      eventListeners.login.login,
      alertMessages.login.invalidEmail,
      errors
    );
  }
  if (!password) {
    validationErrorEvent(
      eventListeners.login.login,
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
      form.dispatchEvent(new CustomEvent(eventListeners.login.startLogin));

      const token = await loginUser(email, password);
      localStorage.setItem(constants.tokenKey, token);
      successButton(form);
      setTimeout(() => {
        window.location.href = '/';
      }, constants.redirectDelay);
    } catch (error) {
      const serverErrorEvent = new CustomEvent(eventListeners.login.login, {
        detail: {
          message: error.message,
          type: 'error',
        },
      });
      form.dispatchEvent(serverErrorEvent);
    } finally {
      form.dispatchEvent(new CustomEvent(eventListeners.login.finishLogin));
    }
  }
};
export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', (event) => handleLoginSubmit(event, loginForm));
};
