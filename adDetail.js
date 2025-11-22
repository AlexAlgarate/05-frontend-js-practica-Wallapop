import { notificationsController } from './notifications/notifications.controller.js';
import { adDetailController } from './adDetail/adDetail.controller.js';

const adDetail = document.querySelector('#adDetailContainer');
const notificationsContainer = document.querySelector('#notifications');

const { showNotification } = notificationsController(notificationsContainer);

const urlParams = window.location.search;
const searchParams = new URLSearchParams(urlParams);

const adId = searchParams.get('adId');
if (!adId) {
  window.location.href = '/';
}

adDetailController(adDetail, adId);
