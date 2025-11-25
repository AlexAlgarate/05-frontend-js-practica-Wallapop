import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { signupController } from './signup.controller.js';
import { eventListeners } from '../../utils/constants.js';
import { initPasswordToggle } from '../../utils/toggle-password.js';
import { loaderController } from '../../shared/loader/loader.controller.js';

const signupForm = document.querySelector('form');
const notificationsContainer = document.querySelector('#notifications');
const loaderContainer = document.querySelector('#loaderContainer');

const { showNotification } = notificationsController(notificationsContainer);
const { show, hide } = loaderController(loaderContainer);

signupForm.addEventListener(eventListeners.startSignup, () => show());
signupForm.addEventListener(eventListeners.finishSignup, () => hide());

signupForm.addEventListener(eventListeners.signup, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

signupController(signupForm);

initPasswordToggle('toggle-password', 'password', 'eye-icon');
initPasswordToggle('toggle-password-confirm', 'passwordConfirm', 'eye-icon-confirm');
