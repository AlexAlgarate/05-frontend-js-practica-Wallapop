import { loginController } from './login.controller.js';
import { eventListeners } from '../../utils/constants.js';
import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { initPasswordToggle } from '../../utils/toggle-password.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { querySelectors as qs } from '../../utils/constants.js';

const loginForm = document.querySelector(qs.loginContainer);
const notificationsContainer = document.querySelector(qs.shared.notifications);
const loaderContainer = document.querySelector(qs.shared.loaderContainer);

const { showNotification } = notificationsController(notificationsContainer);
const { show, hide } = loaderController(loaderContainer);

loginForm.addEventListener(eventListeners.login.startLogin, () =>   show());
loginForm.addEventListener(eventListeners.login.finishLogin, () => hide());

loginForm.addEventListener(eventListeners.login.login, (event) => {
  showNotification(event.detail.message, event.detail.type);
});
loginController(loginForm);

initPasswordToggle('toggle-password', 'password', 'eye-icon');
