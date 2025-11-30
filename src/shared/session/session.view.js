import { ROUTES, querySelectors as qs } from '../../utils/constants.js';

export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn ${qs.button.danger}">Cerrar Sesión</button>
    <a href="${ROUTES.CREATE_AD}"><button class="btn ${qs.button.info}">Crear Anuncio</button>
</a>
  `;
};
export const buildUnauthenticatedSession = () => {
  return `
    <a href="${ROUTES.SIGNUP}"><button class="btn ${qs.button.primary}">Regístrate</button></a>
    <a href="${ROUTES.LOGIN}"><button class="btn ${qs.button.info}">Iniciar sesión</button></a>
  `;
};
