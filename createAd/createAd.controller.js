import { createAd } from './createAd.model.js';

export const createAdController = (createAdContainer) => {
  initSubmit(createAdContainer);
  initSwitch(createAdContainer);
};

const initSubmit = (createAdContainer) => {
  createAdContainer.addEventListener('submit', async (event) => {
    event.preventDefault();

    const adContent = getFormData(createAdContainer);

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
const getFormData = (createAdContainer) => ({
  name: createAdContainer.querySelector('#productName').value.trim(),
  description: createAdContainer.querySelector('#productDescription').value.trim(),
  price: Number(createAdContainer.querySelector('#productPrice').value),
  imageURL: createAdContainer.querySelector('#productImage').value.trim(),
  operationType: createAdContainer.querySelector('#switchCompraVenta').value,
});

const initSwitch = (createAdContainer) => {
  const checkboxSwitch = createAdContainer.querySelector('#switchCompraVenta');
  const label = document.querySelector('#labelCompraVenta');

  const venta = 'Venta';
  const compra = 'Compra';

  const updateSwitchLabel = () => {
    const value = checkboxSwitch.checked ? venta : compra;
    label.textContent = value;
    checkboxSwitch.value = value;
  };

  updateSwitchLabel();

  checkboxSwitch.addEventListener('change', updateSwitchLabel);
};
