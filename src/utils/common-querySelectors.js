import { querySelectors as qs } from './constants.js';

export const loadCommonQuerySelectors = () => {
  const loaderContainer = document.querySelector(qs.shared.loaderContainer);
  const notificationsContainer = document.querySelector(qs.shared.notifications);
  const sessionContainer = document.querySelector(qs.shared.header);
  return { loaderContainer, notificationsContainer, sessionContainer };
};
