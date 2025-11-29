import { createUser } from './signup.model.js';
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
  button.textContent = 'Registrado con éxito';
  return button;
};

const validateFormData = (form) => {
  const errors = [];
  const email = form.querySelector(querySelectors.authenticateUser.email).value;
  const password = form.querySelector(querySelectors.authenticateUser.password).value;
  const passwordConfirm = form.querySelector(
    querySelectors.authenticateUser.passwordConfirm
  ).value;

  const emailRegExp = new RegExp(constants.mailRegExp);

  if (!emailRegExp.test(email)) {
    validationErrorEvent(
      eventListeners.signup.signup,
      alertMessages.signup.invalidEmail,
      errors
    );
  }
  if (password !== passwordConfirm) {
    validationErrorEvent(
      eventListeners.signup.signup,
      alertMessages.signup.passwordMismatch,
      errors
    );
  }

  return { errors, email, password };
};

const handleSignupSubmit = async (event, form) => {
  event.preventDefault();

  const { errors, email, password } = validateFormData(form);

  if (errors.length > 0) {
    errors.forEach((errorEvent) => form.dispatchEvent(errorEvent));
    return;
  }

  try {
    form.dispatchEvent(new CustomEvent(eventListeners.signup.startSignup));

    await createUser(email, password);
    // alert(alertMessages.signup.successSignup);
    successButton(form);
    setTimeout(() => {
      window.location.href = '/';
    }, constants.redirectDelay);
  } catch (error) {
    const serverErrorEvent = new CustomEvent(eventListeners.signup.signup, {
      detail: {
        message: error.message,
        type: 'error',
      },
    });
    form.dispatchEvent(serverErrorEvent);
  } finally {
    form.dispatchEvent(new CustomEvent(eventListeners.signup.finishSignup));
  }
};

export const signupController = (signupForm) => {
  signupForm.addEventListener('submit', (event) =>
    handleSignupSubmit(event, signupForm)
  );
};
