import { loaderController } from './loader/loader.controller.js';
import { notificationsController } from './notifications/notifications.controller.js';
import { eventListeners } from './utils/constants.js';
import { adDetailController } from './adDetail/adDetail.controller.js';

const loaderContainer = document.querySelector('#loaderContainer');
const adDetailContainer = document.querySelector('#adDetailContainer');
const notificationsContainer = document.querySelector('#notifications');

const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

adDetailContainer.addEventListener(eventListeners.startListAds, () => {
  show();
});

adDetailContainer.addEventListener(eventListeners.finishListAds, () => {
  hide();
});

adDetailContainer.addEventListener(eventListeners.errorListAds, (event) => {
  showNotification(event.detail.message, event.detail.type);
});
adDetailController(adDetailContainer);