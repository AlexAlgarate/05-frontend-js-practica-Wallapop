export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn btn-danger">Cerrar Sesión</button>
    <a href="/src/modules/create-ad/create-ad.html"><button class="btn btn-info">Crear Anuncio</button>
</a>
  `;
}
export const buildUnauthenticatedSession = () => {
  return `
    <a href="/src/modules/signup/signup.html"><button class="btn btn-primary">Regístrate</button></a>
    <a href="/src/modules/login/login.html"><button class="btn btn-info">Iniciar sesión</button></a>
  `;
}