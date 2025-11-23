import { notificationsController } from './notifications/notifications.controller.js';
import { adDetailController } from './adDetail/adDetail.controller.js';
import { sessionController } from './session/session.controller.js';

const adDetail = document.querySelector('#adDetailContainer');
const notificationsContainer = document.querySelector('#notifications');
const sessionContainer = document.querySelector('header');

sessionController(sessionContainer);

const { showNotification } = notificationsController(notificationsContainer);

const urlParams = window.location.search;
const searchParams = new URLSearchParams(urlParams);

const adId = searchParams.get('adId');
if (!adId) {
  window.location.href = '/';
}
adDetail.addEventListener('not-user-found', (event) => {
  showNotification(event.detail.message, event.detail.type);
});
adDetailController(adDetail, adId);
