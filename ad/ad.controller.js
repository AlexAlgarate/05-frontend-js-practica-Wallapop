export const adController = (adContainer) => {
  const Ads = document.createElement('div');
  Ads.innerHTML = `<h2>LOS ANUNCIOS de la página ${document.title}</h2>`;

  adContainer.appendChild(Ads);
};
