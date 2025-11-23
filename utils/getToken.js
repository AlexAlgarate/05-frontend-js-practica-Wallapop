import { constants } from './constants.js';

export const getTokenLocalStorage = () => {
  return localStorage.getItem(constants.tokenKey);
};
