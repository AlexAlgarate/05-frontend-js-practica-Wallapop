import { createAd } from './createAd.model.js';

export const createAdController = (createAdContainer) => {
  createAdContainer.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = createAdContainer.querySelector('#nameProduct').value;
    const price = Number(createAdContainer.querySelector('#priceProduct').value);
    const description = createAdContainer.querySelector('#descriptionProduct').value;
    const type = createAdContainer.querySelector('#CompraVentaProduct').value;

    const adContent = {
      name,
      description,
      price,
      type,
    };
    try {
      await createAd(adContent);
      alert('Anuncio creado correctamente');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      alert(error);
    }
  });
};
