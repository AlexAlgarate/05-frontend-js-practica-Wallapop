export const adsView = (ad) => {
  return `
    <h3>User ${ad.user.username} creó el anuncio el ${ad.createdAt}</h3>
    <h4>Product: ${ad.name}</h4>
    <h4>Description: ${ad.description}</h4>
    <h4>Price: ${ad.price} €</h4>
    <h4>El artículo es de: ${ad.type}</h4>
  `;
};

export const buildEmptyAds = () => {
  return `
  <img 
    style="width: 400px"
    src="https://compote.slate.com/images/97d7753a-b5ae-408a-8fed-7ff68b4ce3b7.jpeg" 
  />`;
};