import { constants } from '../utils/constants.js';

export const buildAdDetail = (ad) => {
  return `
  <div class="card shadow-sm border-0 mb-5" style="max-width: 900px; margin: 2rem auto;">
    <img 
      src="${ad.imageURL ? ad.imageURL : constants.imagePlaceholder}" 
      class="card-img-top" 
      alt="imagen del anuncio" 
      style="height: 400px; object-fit: cover; border-radius: 8px 8px 0 0;"
    />
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-3">
         <h2 class="card-title mb-0 fw-bold" style="color: #2c3e50; font-size: 2rem;">${
           ad.name
         }</h2>
         <span class="badge fs-4 px-4 py-2" style="background-color: #10b981; border-radius: 8px;">${
           ad.price
         } €</span>
      </div>
      
      <p class="card-text text-muted mb-4" style="font-size: 1.1rem; line-height: 1.6;">${
        ad.description
      }</p>
      
      <hr class="my-4" style="opacity: 0.1;">
      
      <div class="row g-4 mb-4">
        <div class="col-md-4 col-sm-6">
            <div class="p-3 bg-light rounded-3">
              <small class="text-muted d-block mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Tipo</small>
              <span class="fw-semibold" style="font-size: 1.1rem; color: #2c3e50;">${
                ad.operationType
              }</span>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="p-3 bg-light rounded-3">
              <small class="text-muted d-block mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Vendedor</small>
              <span class="fw-semibold" style="font-size: 1.1rem; color: #2c3e50;">${
                ad.user.username
              }</span>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="p-3 bg-light rounded-3">
              <small class="text-muted d-block mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">Fecha de publicación</small>
              <span class="fw-semibold" style="font-size: 1.1rem; color: #2c3e50;">${
                ad.createdAt
              }</span>
            </div>
        </div>
      </div>

      <div class="d-flex justify-content-between gap-3 flex-wrap mt-4 mb-2">
        <a href="/" class="btn btn-outline-secondary btn-lg px-4" style="border-radius: 8px; border-width: 2px;">
            ← Volver al listado
        </a>
      </div>
    </div>
  </div>
  `;
};
