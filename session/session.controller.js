import { constants, querySelectors } from '../utils/constants.js';
import {
  buildAuthenticatedSession,
  buildUnauthenticatedSession,
} from './session.view.js';

const isUserAuthenticated = () => {
  const token = localStorage.getItem(constants.tokenKey);
  return !!token;
};

const handleLogout = (sessionContainer) => {
  localStorage.removeItem(constants.tokenKey);
  sessionController(sessionContainer);
};

const renderAuthenticatedSession = (sessionContainer) => {
  sessionContainer.innerHTML = buildAuthenticatedSession();
  const closeSessionButton = sessionContainer.querySelector(
    querySelectors.session.closeSession
  );

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
