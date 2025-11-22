import { createUser } from './signup.model.js';
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
  const passwordConfirm = form.querySelector(
    querySelectors.authenticateUser.passwordConfirm
  ).value;

  const emailRegExp = new RegExp(constants.mailRegExp);

  if (!emailRegExp.test(email)) {
    validationErrorEvent(
      eventListeners.signup,
      alertMessages.signup.invalidEmail,
      errors
    );
  }
  if (password !== passwordConfirm) {
    validationErrorEvent(
      eventListeners.signup,
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
    await createUser(email, password);
    alert(alertMessages.signup.successSignup);
    setTimeout(() => {
      window.location.href = '/';
    }, constants.redirectDelay);
  } catch (error) {
    validationErrorEvent(eventListeners.signup, error.message, errors);
  }
};

export const signupController = (signupForm) => {
  signupForm.addEventListener('submit', (event) =>
    handleSignupSubmit(event, signupForm)
  );
};
