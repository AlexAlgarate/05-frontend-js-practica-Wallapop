import { loginUser } from './login.model.js';
import { constants, eventListeners } from '../utils/constants.js';
import { validationErrorEvent } from '../utils/errorEvents.js';

export const loginController = (loginForm) => {
  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#password');

  const emailError = loginForm.querySelector('#email-error');
  const passwordError = loginForm.querySelector('#password-error');

  const clearErrors = () => {
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    emailError.textContent = '';
    passwordError.textContent = '';

    emailError.style.display = '';
    passwordError.style.display = '';
  };

  const showFieldError = (input, container, message) => {
    input.classList.add('is-invalid');
    container.textContent = message;
    container.style.display = 'block';
  };

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearErrors();

    let errors = [];

    const email = emailInput.value;
    const password = passwordInput.value;

    const emailRegExp = new RegExp(constants.mailRegExp);

    if (!emailRegExp.test(email)) {
      showFieldError(emailInput, emailError, 'Email incorrecto');
      validationErrorEvent(eventListeners.login, 'Email inválido', errors);
    }

    try {
      const token = await loginUser(email, password);
      localStorage.setItem(constants.tokenKey, token);

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      showFieldError(
        passwordInput,
        passwordError,
        'Credenciales incorrectas, revise email y contraseña'
      );
    }
  });
};
