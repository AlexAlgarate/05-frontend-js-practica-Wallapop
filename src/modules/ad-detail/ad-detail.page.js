import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { adDetailController } from './ad-detail.controller.js';
import { sessionController } from '../../shared/session/session.controller.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { eventListeners } from '../../utils/constants.js';

const adDetail = document.querySelector('#adDetailContainer');
const notificationsContainer = document.querySelector('#notifications');
const sessionContainer = document.querySelector('header');
const loaderContainer = document.querySelector('#loaderContainer');

sessionController(sessionContainer);

const { showNotification } = notificationsController(notificationsContainer);
const { show, hide } = loaderController(loaderContainer);

const urlParams = window.location.search;
const searchParams = new URLSearchParams(urlParams);

const adId = searchParams.get('adId');
if (!adId) {
  window.location.href = '/';
}

adDetail.addEventListener(eventListeners.startAdDetail, () => {
  show();
});

adDetail.addEventListener(eventListeners.errorAdDetail, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

adDetail.addEventListener(eventListeners.finishAdDetail, () => {
  hide();
});

adDetail.addEventListener('not-user-found', (event) => {
  showNotification(event.detail.message, event.detail.type);
});
adDetailController(adDetail, adId);
