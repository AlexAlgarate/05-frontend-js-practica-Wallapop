import { adsController } from './lista-ads.controller.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { sessionController } from '../../shared/session/session.controller.js';
import { eventListeners } from '../../utils/constants.js';

const loaderContainer = document.querySelector('#loaderContainer');
const adListContainer = document.querySelector('#ads');
const notificationsContainer = document.querySelector('#notifications');
const sessionContainer = document.querySelector('header');

sessionController(sessionContainer);
const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

adListContainer.addEventListener(eventListeners.startListAds, () => {
  show();
});

adListContainer.addEventListener(eventListeners.finishListAds, () => {
  hide();
});

adListContainer.addEventListener(eventListeners.errorListAds, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

adsController(adListContainer);
