import { constants } from '../utils/constants.js';

export const adsView = (ad) => {
  return `
    <h3>User ${ad.user.username} creó el anuncio el ${ad.createdAt}</h3>
    <h4>Product: ${ad.name}</h4>
    <h4>Description: ${ad.description}</h4>
    <h4>Price: ${ad.price} €</h4>
    <h4>El artículo con SWITCH ES: ${ad.operationType}</h4>
    <img
      style="width: 200px"
      src="${ad.imageURL ? ad.imageURL : constants.imagePlaceholder}"
    />
  `;
};

export const buildEmptyAds = () => {
  return `
  <img 
    style="width: 400px"
    src="${constants.imageAdNotAvailable}" 
  />`;
};
