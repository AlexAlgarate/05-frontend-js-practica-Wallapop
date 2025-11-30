import { constants, querySelectors as qs } from '../../utils/constants.js';
import {
  buildAuthenticatedSession,
  buildUnauthenticatedSession,
} from './session.view.js';
import { getTokenLocalStorage } from '../../utils/get-token.js';

const isUserAuthenticated = () => {
  const token = getTokenLocalStorage(constants.tokenKey);
  return !!token;
};

const handleLogout = (sessionContainer) => {
  localStorage.removeItem(constants.tokenKey);
  sessionController(sessionContainer);
};

const renderAuthenticatedSession = (sessionContainer) => {
  sessionContainer.innerHTML = buildAuthenticatedSession();
  const closeSessionButton = sessionContainer.querySelector(qs.session.closeSession);

  closeSessionButton.addEventListener('click', () => handleLogout(sessionContainer));
};

const renderUnauthenticatedSession = (sessionContainer) => {
  sessionContainer.innerHTML = buildUnauthenticatedSession();
};

export const sessionController = (sessionContainer) => {
  isUserAuthenticated()
    ? renderAuthenticatedSession(sessionContainer)
    : renderUnauthenticatedSession(sessionContainer);
};
