import { createAdController } from './createAd/createAd.controller.js';
import { loaderController } from './loader/loader.controller.js';
import { notificationsController } from './notifications/notifications.controller.js';
import { sessionController } from './session/session.controller.js';

const loaderContainer = document.querySelector('#loaderContainer');
const adListContainer = document.querySelector('#anuncios');
const notificationsContainer = document.querySelector('#notifications');
const sessionContainer = document.querySelector('header');

sessionController(sessionContainer);
const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

createAdController(adListContainer);
