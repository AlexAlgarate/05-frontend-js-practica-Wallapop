import { createAd } from './createAd.model.js';
import {
  constants,
  querySelectors,
  switchOptionsCreateAd,
} from '../utils/constants.js';

const successButton = (form) => {
  const button = form.querySelector('.btn-primary');
  button.classList.replace('btn-primary', 'btn-success');
  button.textContent = 'Anuncio creado con éxito';
  return button;
};

const getFormData = (form) => ({
  name: form.querySelector(querySelectors.createAdForm.productName).value.trim(),
  description: form
    .querySelector(querySelectors.createAdForm.productDescription)
    .value.trim(),
  price: Number(form.querySelector(querySelectors.createAdForm.productPrice).value),
  imageURL: form.querySelector(querySelectors.createAdForm.productImage).value.trim(),
  operationType: form.querySelector(querySelectors.createAdForm.switchSalePurchase)
    .value,
});

const handleSubmit = async (event, form) => {
  event.preventDefault();

  const adContent = getFormData(form);

  try {
    await createAd(adContent);

    successButton(form);
    setTimeout(() => {
      window.location.href = '/';
    }, constants.redirectDelay);
  } catch (error) {
    alert(error.message);
  }
};

const initSwitch = (form) => {
  const checkboxSwitch = form.querySelector(
    querySelectors.createAdForm.switchSalePurchase
  );
  const label = form.querySelector(querySelectors.createAdForm.labelSalePurhase);

  const updateSwitchLabel = () => {
    const value = checkboxSwitch.checked
      ? switchOptionsCreateAd.sale
      : switchOptionsCreateAd.purchase;
    label.textContent = value;
    checkboxSwitch.value = value;
  };

  updateSwitchLabel();
  checkboxSwitch.addEventListener('change', updateSwitchLabel);
};

export const createAdController = (createAdContainer) => {
  initSwitch(createAdContainer);
  createAdContainer.addEventListener('submit', (event) =>
    handleSubmit(event, createAdContainer)
  );
};
