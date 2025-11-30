import { getAds } from './list-ad.smodel.js';
import { adsView, buildEmptyList, buildErrorView } from './list-ads.view.js';
import { buildNoResultsView } from '../search-ads/search-ads.view.js';
import { constants, eventListeners as el, ROUTES, querySelectors as qs } from '../../utils/constants.js';
import { getTokenLocalStorage } from '../../utils/get-token.js';
import { dispatchCustomEvent } from '../../utils/customEvent.js';

const AD_STYLES = {
  cursor: 'pointer',
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

const filterAds = (ads, searchTerm) => {
  if (!searchTerm) return ads;

  return ads.filter((ad) => {
    const name = ad.name.toLowerCase();
    const description = ad.description.toLowerCase();
    return name.includes(searchTerm) || description.includes(searchTerm);
  });
};

const renderAds = (container, ads, isError, searchTerm = '') => {
  container.innerHTML = '';

  if (isError) {
    container.innerHTML = buildErrorView();
    return;
  }

  if (ads.length === 0 && !searchTerm) {
    const token = getTokenLocalStorage(constants.tokenKey);
    const isUserAuthenticated = !!token;

    container.innerHTML = buildEmptyList(isUserAuthenticated);
    return;
  }

  if (ads.length === 0 && searchTerm) {
    container.innerHTML = buildNoResultsView(searchTerm);

    const clearButton = container.querySelector(qs.searchAd.clearButton);
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        dispatchCustomEvent(container, el.searchAds.clearSearch);
      });
    }
    return;
  }

  ads.forEach((ad) => {
    container.appendChild(createAdElement(ad));
  });
};

export const adsController = async (adsContainer) => {
  let allAds = [];
  let isError = false;
  let currentSearchTerm = '';

  try {
    dispatchCustomEvent(adsContainer, el.listAds.startListAds);
    allAds = await getAds();
  } catch (error) {
    isError = true;

    dispatchCustomEvent(adsContainer, el.listAds.errorListAds, {
      message: error.message,
      type: 'error',
    });
  } finally {
    dispatchCustomEvent(adsContainer, el.listAds.finishListAds);
  }

  renderAds(adsContainer, allAds, isError);

  // Listener para búsqueda
  adsContainer.addEventListener(el.searchAds.search, (event) => {
    currentSearchTerm = event.detail.searchTerm;
    const filteredAds = filterAds(allAds, currentSearchTerm);
    renderAds(adsContainer, filteredAds, false, currentSearchTerm);
  });

  // Listener para limpiar búsqueda
  adsContainer.addEventListener(el.searchAds.clearSearch, () => {
    currentSearchTerm = '';
    renderAds(adsContainer, allAds, false);

    // Limpiar el input de búsqueda
    const searchInput = document.querySelector(qs.searchAd.searchinput);
    if (searchInput) {
      searchInput.value = '';
    }
  });
};
