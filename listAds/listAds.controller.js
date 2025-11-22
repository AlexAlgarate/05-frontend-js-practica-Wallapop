import { getAds } from './listAds.model.js';
import { adsView, buildEmptyAds } from './listAds.view.js';
import { eventListeners } from '../utils/constants.js';

const AD_STYLES = {
  cursor: 'pointer',
};

const dispatchCustomEvent = (container, eventName, detail = null) => {
  const event = new CustomEvent(eventName, detail ? { detail } : {});
  container.dispatchEvent(event);
};

const applyStylesToElement = (element, styles) => {
  Object.assign(element.style, styles);
};

const createAdElement = (ad) => {
  const adElement = document.createElement('div');
  adElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

  applyStylesToElement(adElement, AD_STYLES);
  adElement.innerHTML = adsView(ad);
  adElement.addEventListener('click', () => {
    window.location.href = `ad-detail.html?adId=${ad.id}`;
  });

  return adElement;
};

const renderAds = (container, ads) => {
  if (ads.length === 0) {
    container.innerHTML = buildEmptyAds();
    return;
  }

  ads.forEach((ad) => {
    container.appendChild(createAdElement(ad));
  });
};

export const adsController = async (adsContainer) => {
  let adsToShow = [];

  try {
    dispatchCustomEvent(adsContainer, eventListeners.startListAds);
    adsToShow = await getAds();
  } catch (error) {
    dispatchCustomEvent(adsContainer, eventListeners.errorListAds, {
      message: error.message,
      type: 'error',
    });
  } finally {
    dispatchCustomEvent(adsContainer, eventListeners.finishListAds);
  }

  renderAds(adsContainer, adsToShow);
};
