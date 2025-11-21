export const constants = {
  baseUrlSparrest: 'http://localhost:8000',
  mailRegExp: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
  tokenKey: 'token',
};

export const eventListeners = {
  login: 'login-validation-error',
  signup: 'signup-validation-error',
  startListAds: 'start-fetching-ads',
  errorListAds: 'error-fetching-ads',
  finishListAds: 'finish-fetching-ads',
};
