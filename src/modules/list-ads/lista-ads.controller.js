import { getAds } from './list-ad.smodel.js';
import { adsView, buildEmptyList, buildErrorView } from './list-ads.view.js';
import { constants, eventListeners, ROUTES } from '../../utils/constants.js';
import { getTokenLocalStorage } from '../../utils/get-token.js';

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
    window.location.href = `${ROUTES.AD_DETAIL}?adId=${ad.id}`;
  });

  return adElement;
};

const renderAds = (container, ads, isError) => {
  if (isError) {
    container.innerHTML = buildErrorView();
    return;
  }

  if (ads.length === 0) {
    const token = getTokenLocalStorage(constants.tokenKey);
    const isUserAuthenticated = !!token;

    container.innerHTML = buildEmptyList(isUserAuthenticated);
    return;
  }

  ads.forEach((ad) => {
    container.appendChild(createAdElement(ad));
  });
};

export const adsController = async (adsContainer) => {
  let adsToShow = [];
  let isError = false;

  try {
    dispatchCustomEvent(adsContainer, eventListeners.listAds.startListAds);
    adsToShow = await getAds();
  } catch (error) {
    isError = true;

    dispatchCustomEvent(adsContainer, eventListeners.listAds.errorListAds, {
      message: error.message,
      type: 'error',
    });
  } finally {
    dispatchCustomEvent(adsContainer, eventListeners.listAds.finishListAds);
  }

  renderAds(adsContainer, adsToShow, isError);
};
