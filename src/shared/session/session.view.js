import { ROUTES } from '../../utils/constants.js';

export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn btn-danger">Cerrar Sesión</button>
    <a href="${ROUTES.CREATE_AD}"><button class="btn btn-info">Crear Anuncio</button>
</a>
  `;
};
export const buildUnauthenticatedSession = () => {
  return `
    <a href="${ROUTES.SIGNUP}"><button class="btn btn-primary">Regístrate</button></a>
    <a href="${ROUTES.LOGIN}"><button class="btn btn-info">Iniciar sesión</button></a>
  `;
};
