export const buildAuthenticatedSession = () => {
  return `
    <button id="closeSession" class="btn btn-danger">Cerrar Sesión</button>
    <a href="/create-ad.html"><button class="btn btn-info">Crear Anuncio</button>
</a>
  `;
}
export const buildUnauthenticatedSession = () => {
  return `
    <a href="/signup.html"><button class="btn btn-info">Regístrate</button></a>
    <a href="/login.html"><button class="btn btn-info">Iniciar sesión</button></a>
  `;
}