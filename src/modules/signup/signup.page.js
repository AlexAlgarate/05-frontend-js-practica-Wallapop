import { notificationsController } from '../../shared/notifications/notifications.controller.js';
import { signupController } from './signup.controller.js';
import { eventListeners } from '../../utils/constants.js';
import { initPasswordToggle } from '../../utils/toggle-password.js';
import { loaderController } from '../../shared/loader/loader.controller.js';
import { querySelectors as qs } from '../../utils/constants.js';

const signupForm = document.querySelector(qs.signupContainer);
const notificationsContainer = document.querySelector(qs.shared.notifications);
const loaderContainer = document.querySelector(qs.shared.loaderContainer);

const { showNotification } = notificationsController(notificationsContainer);
const { show, hide } = loaderController(loaderContainer);

signupForm.addEventListener(eventListeners.signup.startSignup, () => show());
signupForm.addEventListener(eventListeners.signup.finishSignup, () => hide());

signupForm.addEventListener(eventListeners.signup.signup, (event) => {
  showNotification(event.detail.message, event.detail.type);
});

signupController(signupForm);

initPasswordToggle('toggle-password', 'password', 'eye-icon');
initPasswordToggle('toggle-password-confirm', 'passwordConfirm', 'eye-icon-confirm');
