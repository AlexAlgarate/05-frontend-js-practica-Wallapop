import { adController } from './ad/ad.controller.js';
import { loaderController } from './loader/loader.controller.js';
import { notificationsController } from './notifications/notifications.controller.js';
import { sessionController } from './session/session.controller.js';

const loaderContainer = document.querySelector('#loaderContainer');
const tweetListContainer = document.querySelector('#anuncios');
const notificationsContainer = document.querySelector('#notifications');
const sessionContainer = document.querySelector('header');

sessionController(sessionContainer);
const { show, hide } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

adController(tweetListContainer);
