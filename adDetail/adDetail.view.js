import { constants } from '../utils/constants.js';

export const buildAdDetail = (ad) => {
  return `
    <h3>User ${ad.user.username} creó el anuncio el ${ad.createdAt}</h3>
    <h4>${ad.name}</h4>
    <h4>${ad.price}</h4>
    <h4>${ad.description}</h4>
    <h4>${ad.type}</h4>
    <img src="${
      ad.imageUrl ? ad.imageUrl : constants.imagePlaceholder
    }" alt="ad placeholder image" />
    `;
};
