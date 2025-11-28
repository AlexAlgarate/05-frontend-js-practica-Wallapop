import { createAd, getAdData, updateAd } from './create-ad.model.js';
import {
  constants,
  querySelectors,
  switchOptionsCreateAd,
} from '../../utils/constants.js';

const fillUpdatingForm = (form, ad) => {
  form.querySelector(querySelectors.createAdForm.productName).value = ad.name || '';
  form.querySelector(querySelectors.createAdForm.productDescription).value =
    ad.description || '';
  form.querySelector(querySelectors.createAdForm.productPrice).value = ad.price || '';
  form.querySelector(querySelectors.createAdForm.productImage).value =
    ad.imageURL || '';

  const checkboxSwitch = form.querySelector(
    querySelectors.createAdForm.switchSalePurchase
  );
  const label = form.querySelector(querySelectors.createAdForm.labelSalePurhase);

  const isSale = ad.operationType === switchOptionsCreateAd.sale;
  checkboxSwitch.checked = isSale;
  checkboxSwitch.value = ad.operationType;
  label.textContent = ad.operationType;
};

const successButton = (form, operation) => {
  const button = form.querySelector('.btn-primary');
  button.classList.replace('btn-primary', 'btn-success');
  button.textContent = `Anuncio ${operation} correctamente`;
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

const handleSubmit = async (event, form, adId) => {
  event.preventDefault();

  const adContent = getFormData(form);

  try {
    if (adId) {
      await updateAd(adId, adContent);
      successButton(form, 'actualizado');
    } else {
      await createAd(adContent);
      successButton(form, 'creado');
    }

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

  if (!checkboxSwitch.checked) {
    label.textContent = switchOptionsCreateAd.purchase;
  }

  const updateSwitchLabel = () => {
    const value = checkboxSwitch.checked
      ? switchOptionsCreateAd.sale
      : switchOptionsCreateAd.purchase;
    label.textContent = value;
    checkboxSwitch.value = value;
  };

  if (!label.textContent) {
    updateSwitchLabel();
  }

  checkboxSwitch.addEventListener('change', updateSwitchLabel);
};

export const createAdController = async (createAdContainer) => {
  const urlParams = new URLSearchParams(window.location.search);
  const adId = urlParams.get('adId');

  initSwitch(createAdContainer);

  if (adId) {
    try {
      const title = document.querySelector('h1');
      if (title) title.textContent = 'Editar anuncio';

      const submitBtn = createAdContainer.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'Guardar cambios';

      const ad = await getAdData(adId);
      fillUpdatingForm(createAdContainer, ad);
    } catch (error) {
      alert('Error al cargar el anuncio para editar');
      window.location.href = '/';
    }
  }

  createAdContainer.addEventListener('submit', (event) =>
    handleSubmit(event, createAdContainer, adId)
  );
};
