import { ROUTES, querySelectors as qs } from '../../utils/constants.js';

export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn ${qs.buttons.danger}">Cerrar Sesión</button>
    <a href="${ROUTES.CREATE_AD}"><button class="btn ${qs.buttons.info}">Crear Anuncio</button>
</a>
  `;
};
export const buildUnauthenticatedSession = () => {
  return `
    <a href="${ROUTES.SIGNUP}"><button class="btn ${qs.buttons.primary}">Regístrate</button></a>
    <a href="${ROUTES.LOGIN}"><button class="btn ${qs.buttons.info}">Iniciar sesión</button></a>
  `;
};
