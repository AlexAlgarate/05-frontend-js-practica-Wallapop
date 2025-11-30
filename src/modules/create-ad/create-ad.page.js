import { createAdController } from './create-ad.controller.js';
import { sessionController } from '../../shared/session/session.controller.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { eventListeners } from '../../utils/constants.js';

const createAdContainer = document.querySelector('#createAdContainer');
const sessionContainer = document.querySelector('header');
const loaderContainer = document.querySelector('#loaderContainer');
const notificationsContainer = document.querySelector('#notifications');

sessionController(sessionContainer);

const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

createAdContainer.addEventListener(eventListeners.createAd.startCreateAd, () => {
  show();
});

createAdContainer.addEventListener(eventListeners.createAd.errorCreateAd, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

createAdContainer.addEventListener(eventListeners.createAd.finishCreateAd, () => {
  hide();
});

createAdController(createAdContainer);
