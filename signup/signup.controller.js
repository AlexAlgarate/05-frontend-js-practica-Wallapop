import { createUser } from './signup.model.js';
import { constants, eventListeners } from '../utils/constants.js';

export const signupController = (signupForm) => {
  signupForm.addEventListener('submit', async (event) => {
    // Usando preventDefault() evitamos que la validación se haga en el lado del servidor
    // Que es el comportamiento por defecto de la etiqueta form al hacer submit
    event.preventDefault();

    //
    let errors = [];

    const password = signupForm.querySelector('#password').value;
    const passwordConfirm = signupForm.querySelector('#passwordConfirm').value;

    const email = signupForm.querySelector('#email').value;
    const emailRegExp = new RegExp(constants.mailRegExp);

    const validationErrorEvent = (message) => {
      const errorEvent = new CustomEvent(eventListeners.signup, {
        detail: {
          message,
          type: 'error',
        },
      });
      errors.push(errorEvent);
    };

    if (!emailRegExp.test(email)) {
      validationErrorEvent('Email inválido, pruebe de nuevo.');
    }
    if (password !== passwordConfirm) {
      validationErrorEvent('Las contraseñas no coinciden.');
    }

    errors.forEach((errorEvent) => {
      signupForm.dispatchEvent(errorEvent);
    });

    // Si no hay errores, llama a la API
    if (errors.length === 0) {
      try {
        await createUser(email, password);
        alert('usuario creado correctametne');
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } catch (error) {
        alert(error.message);
      }
    }
  });
};
