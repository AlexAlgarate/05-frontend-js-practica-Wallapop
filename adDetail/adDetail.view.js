import { constants } from '../utils/constants.js';

export const buildAdDetail = (ad) => {
  return `
  <div>
    <div class="card" style="width: 18rem;">
    <img src="${
      ad.imageURL ? ad.imageURL : constants.imagePlaceholder
    }" alt="ad placeholder image or ad image"
    />
    <div class="card-body">
      <h5 class="card-title">Anuncio ${ad.name}</h5>
      <p class="card-text">${ad.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${ad.price} €</li>
      <li class="list-group-item">Artículo de ${ad.operationType}</li>
      <li class="list-group-item">Creado por ${ad.user.username}</li>
      <li class="list-group-item">Fecha de creación ${ad.createdAt}</li>
      </ul>
    </div>
  </div>
  `;
};
