import { constants } from '../utils/constants.js';

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

export const buildEmptyAds = () => {
  return `
  <div class="col-12 text-center mt-5">
    <h3>No hay anuncios disponibles</h3>
    <img 
      style="width: 100%; max-width: 400px; border-radius: 10px;"
      src="${constants.imageAdNotAvailable}" 
    />
  </div>`;
};
