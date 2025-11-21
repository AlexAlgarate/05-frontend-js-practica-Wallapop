import { createAd } from './createAd.model.js';

export const createAdController = (createAdContainer) => {
  createAdContainer.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = createAdContainer.querySelector('#productName').value;
    const price = Number(createAdContainer.querySelector('#productPrice').value);
    const description = createAdContainer.querySelector('#productDescription').value;
    const type = createAdContainer.querySelector('#productType').value;
    const image = createAdContainer.querySelector('#productImage').value;

    const adContent = {
      name,
      description,
      price,
      type,
      image,
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
