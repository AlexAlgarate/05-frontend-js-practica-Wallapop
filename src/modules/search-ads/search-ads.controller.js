import { buildSearchForm } from './search-ads.view.js';
import { dispatchCustomEvent } from '../../utils/customEvent.js';
import { eventListeners, querySelectors as qs } from '../../utils/constants.js';

const handleSearchSubmit = (event, form, container) => {
  event.preventDefault();

  const searchTerm = form.querySelector(qs.searchAd.searchinput).value.trim().toLowerCase();

  dispatchCustomEvent(container, eventListeners.searchAds.search, {
    searchTerm,
  });
};

const handleClearSearch = (container) => {
  dispatchCustomEvent(container, eventListeners.searchAds.clearSearch);
};

export const searchController = (searchContainer, adsContainer) => {
  searchContainer.innerHTML = buildSearchForm();

  const form = searchContainer.querySelector(qs.searchAd.searchForm);
  const clearButton = searchContainer.querySelector(qs.searchAd.clearSearch);

  form.addEventListener('submit', (event) =>
    handleSearchSubmit(event, form, adsContainer)
  );

  clearButton.addEventListener('click', () => handleClearSearch(adsContainer));
};
