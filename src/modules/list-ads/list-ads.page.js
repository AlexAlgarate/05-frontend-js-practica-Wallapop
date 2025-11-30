import { adsController } from './list-ads.controller.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { sessionController } from '../../shared/session/session.controller.js';
import { searchController } from '../search-ads/search-ads.controller.js';
import { eventListeners, querySelectors as qs } from '../../utils/constants.js';

const loaderContainer = document.querySelector(qs.shared.loaderContainer);
const adListContainer = document.querySelector('#ads');
const notificationsContainer = document.querySelector(qs.shared.notifications);
const sessionContainer = document.querySelector('header');
const searchContainer = document.querySelector(qs.searchAd.searchContainer);

sessionController(sessionContainer);
searchController(searchContainer, adListContainer);

const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

adListContainer.addEventListener(eventListeners.listAds.startListAds, () => {
  show();
});

adListContainer.addEventListener(eventListeners.listAds.finishListAds, () => {
  hide();
});

adListContainer.addEventListener(eventListeners.listAds.errorListAds, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

adsController(adListContainer);
