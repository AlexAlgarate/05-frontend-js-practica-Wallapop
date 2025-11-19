import { constants } from '../utils/constants.js';
import {
  buildAuthenticatedSession,
  buildUnauthenticatedSession,
} from './session.view.js';

export const sessionController = (sessionContainer) => {
  const token = localStorage.getItem(constants.tokenKey);

  if (token) {
    // usuario con sesión iniciada, muestra X botones
    sessionContainer.innerHTML = buildAuthenticatedSession();
    const closeSessionButton = sessionContainer.querySelector('#closeSession');
    closeSessionButton.addEventListener('click', () => {
      localStorage.removeItem(constants.tokenKey);
      // Hay que volver a pontar los botones
      // sessionContainer.innerHTML = buildUnauthenticatedSession();
      // window.location.href = '/';

      // La mejor forma es llamarse así mismo
      sessionController(sessionContainer);
    });
  } else {
    // Usuario no autenticado, muestro Y botones
    sessionContainer.innerHTML = buildUnauthenticatedSession();
  }
};
