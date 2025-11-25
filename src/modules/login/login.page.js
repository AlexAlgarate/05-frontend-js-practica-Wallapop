import { loginController } from './login/login.controller.js';
import { eventListeners } from '../../utils/constants.js';
import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { initPasswordToggle } from '../../utils/toggle-password.js';
import { loaderController } from '../../shared/loader/loader.controller.js';

const loginForm = document.querySelector('form');
const notificationsContainer = document.querySelector('#notifications');
const loaderContainer = document.querySelector('#loaderContainer');

const { showNotification } = notificationsController(notificationsContainer);
const { show, hide } = loaderController(loaderContainer);

loginForm.addEventListener(eventListeners.startLogin, () =>   show());
loginForm.addEventListener(eventListeners.finishLogin, () => hide());

loginForm.addEventListener(eventListeners.login, (event) => {
  showNotification(event.detail.message, event.detail.type);
});
loginController(loginForm);

initPasswordToggle('toggle-password', 'password', 'eye-icon');
