import { buildNotification } from './notifications.view.js';

export function notificationsController(notificationsContainer) {
  const showNotification = (message, type = 'success') => {
    const newNotification = document.createElement('div');
    newNotification.innerHTML = buildNotification(message, type);

    newNotification.querySelector('button').addEventListener('click', () => {
      newNotification.remove();
    });

    notificationsContainer.appendChild(newNotification);

    setTimeout(() => {
      newNotification.remove();
    }, 5000);
  };

  return {
    showNotification,
  };
}
