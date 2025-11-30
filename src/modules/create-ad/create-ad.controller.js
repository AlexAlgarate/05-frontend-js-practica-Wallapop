import { createAd, getAdData, updateAd } from './create-ad.model.js';
import {
  constants,
  querySelectors as qs,
  switchOptionsCreateAd,
  eventListeners,
} from '../../utils/constants.js';
import { buildCreateAdForm, buildCreateAdError } from './create-ad.view.js';
import { dispatchCustomEvent } from '../../utils/customEvent.js';

const successButton = (form, operation) => {
  const button = form.querySelector(`.${qs.button.primary}`);
  button.classList.replace(qs.button.primary, qs.button.success);
  button.textContent = `Anuncio ${operation} correctamente`;
  return button;
};

const getFormData = (form) => ({
  name: form.querySelector(qs.createAdForm.productName).value.trim(),
  description: form.querySelector(qs.createAdForm.productDescription).value.trim(),
  price: Number(form.querySelector(qs.createAdForm.productPrice).value),
  imageURL: form.querySelector(qs.createAdForm.productImage).value.trim(),
  operationType: form.querySelector(qs.createAdForm.switchSalePurchase).value,
});

const handleSubmit = async (event, form, adId, container) => {
  event.preventDefault();

  const adContent = getFormData(form);

  try {
    dispatchCustomEvent(container, eventListeners.createAd.startCreateAd);

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
    dispatchCustomEvent(container, eventListeners.createAd.errorCreateAd, {
      message: error.message,
      type: 'error',
    });
  } finally {
    dispatchCustomEvent(container, eventListeners.createAd.finishCreateAd);
  }
};

const initSwitch = (form) => {
  const checkboxSwitch = form.querySelector(qs.createAdForm.switchSalePurchase);

  const label = form.querySelector(qs.createAdForm.labelSalePurhase);

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

const renderCreateAdForm = (container, ad = null) => {
  const formElement = document.createElement('div');
  formElement.innerHTML = buildCreateAdForm(ad);
  container.appendChild(formElement);

  const form = container.querySelector('form');
  initSwitch(form);

  return form;
};

export const createAdController = async (createAdContainer) => {
  const urlParams = new URLSearchParams(window.location.search);
  const adId = urlParams.get('adId');

  let form;

  try {
    if (adId) {
      dispatchCustomEvent(createAdContainer, eventListeners.createAd.startCreateAd);
      const ad = await getAdData(adId);
      form = renderCreateAdForm(createAdContainer, ad);
    } else {
      form = renderCreateAdForm(createAdContainer);
    }

    form.addEventListener('submit', (event) =>
      handleSubmit(event, form, adId, createAdContainer)
    );
  } catch (error) {
    createAdContainer.innerHTML = buildCreateAdError(error.message);
  } finally {
    if (adId) {
      dispatchCustomEvent(createAdContainer, eventListeners.createAd.finishCreateAd);
    }
  }
};
