import { ROUTES, querySelectors } from '../../utils/constants.js';

export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn ${querySelectors.button.danger}">Cerrar Sesión</button>
    <a href="${ROUTES.CREATE_AD}"><button class="btn ${querySelectors.button.info}">Crear Anuncio</button>
</a>
  `;
};
export const buildUnauthenticatedSession = () => {
  return `
    <a href="${ROUTES.SIGNUP}"><button class="btn ${querySelectors.button.primary}">Regístrate</button></a>
    <a href="${ROUTES.LOGIN}"><button class="btn ${querySelectors.button.info}">Iniciar sesión</button></a>
  `;
};
