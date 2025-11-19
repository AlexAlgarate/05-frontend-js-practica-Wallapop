import { notificationsController } from './notifications/notifications.controller.js';
import { signupController } from './signup/signup.controller.js';
import { eventListeners } from './utils/constants.js';

const signupForm = document.querySelector('form');
const notificationsContainer = document.querySelector('#notifications');

const { showNotification } = notificationsController(notificationsContainer);

signupForm.addEventListener(eventListeners.signup, (event) => {
  showNotification(event.detail.message, event.detail.type);
});
signupController(signupForm);
