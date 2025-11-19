import { loginUser } from './login.model.js';
import { constants, eventListeners } from '../utils/constants.js';
import { validationErrorEvent } from '../utils/errorEvents.js';

export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let errors = [];

    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;

    const emailRegExp = new RegExp(constants.mailRegExp);

    if (!emailRegExp.test(email)) {
      validationErrorEvent(
        eventListeners.login,
        'Email inválido, pruebe de nuevo',
        errors
      );
    }
    console.log('errors -->', errors, '\n');
    if (errors.length === 0) {
      try {
        console.log('Iniciamos el fetching del token')
        const token = await loginUser(email, password);
        console.log('Tenemos el token')
        localStorage.setItem(constants.tokenKey, token);
        console.log(`Token --> ${token}`);
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } catch (error) {
        alert(error.message);
      }
    }
  });
};
