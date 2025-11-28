import { constants, ROUTES } from '../../utils/constants.js';

export const adsView = (ad) => {
  return `
  <div class="card h-100 shadow-sm transition-hover">
    <img 
      src="${ad.imageURL ? ad.imageURL : constants.imagePlaceholder}" 
      class="card-img-top" 
      alt="imagen del anuncio" 
      style="height: 200px; object-fit: cover;"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold text-truncate" title="${ad.name}">
        ${ad.name}
      </h5>
      <p 
        class="card-text text-muted flex-grow-1"
        style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;"
      >
        ${ad.description}
      </p>
      <div class="mt-auto">
        <h4 class="text-primary mb-3">${ad.price} €</h4>
      </div>
    </div>
    <ul class="list-group list-group-flush small">
      <li class="list-group-item d-flex justify-content-between">
        <span>Tipo:</span> 
        <span class="badge bg-secondary">${ad.operationType}</span>
      </li>
      <li class="list-group-item text-muted">Por: ${ad.user.username}</li>
      <li class="list-group-item text-muted">Fecha de creación:: ${ad.createdAt}</li>
    </ul>
  </div>
  `;
};

export const buildErrorView = () => {
  return `
  <div class="col-12 text-center mt-5">
    <h3 class="text-danger">Lo sentimos, hubo un problema al cargar los anuncios.</h3>
    <p class="text-muted">Inténtalo de nuevo más tarde.</p>
    <img 
      style="width: 100%; max-width: 400px; border-radius: 10px;"
      src="${constants.imageAdNotAvailable}" 
      alt="Error al cargar"
    />
  </div>`;
};

export const buildEmptyList = (isUserAuthenticated) => {
  let actionButtons = '';

  if (isUserAuthenticated) {
    // Usuario Logueado -> Botón Crear Anuncio
    actionButtons = `
      <div class="mt-4">
        <p class="lead">¡Sé el primero en publicar algo!</p>
        <a href="${ROUTES.CREATE_AD}" class="btn btn-lg btn-primary shadow">
          Crear mi primer anuncio
        </a>
      </div>
    `;
  } else {
    // Usuario No Logueado -> Botones Login / Registro
    actionButtons = `
      <div class="mt-4">
        <p class="lead">Únete a nuestra comunidad para empezar a vender.</p>
        <div class="d-flex justify-content-center gap-3">
          <a href="${ROUTES.SIGNUP}" class="btn btn-primary">Regístrate</a>
          <a href="${ROUTES.LOGIN}" class="btn btn-outline-primary">Iniciar sesión</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="col-12 text-center mt-5">
      <h2>Todavía no hay anuncios disponibles</h2>
      ${actionButtons}
    </div>
  `;
};
