import { loginController } from './login/login.controller.js';
import { eventListeners } from './utils/constants.js';
import { notificationsController } from './notifications/notifications.controller.js';
import { initPasswordToggle } from './utils/togglePassword.js';

const loginForm = document.querySelector('form');
const notificationsContainer = document.querySelector('#notifications');

const { showNotification } = notificationsController(notificationsContainer);

loginForm.addEventListener(eventListeners.login, (event) => {
  showNotification(event.detail.message, event.detail.type);
});
loginController(loginForm);

initPasswordToggle('toggle-password', 'password', 'eye-icon');
