import { buildLoader } from './loader.view.js';

export const loaderController = (loaderContainer) => {
  const show = () => {
    loaderContainer.innerHTML = buildLoader();
  };
  const hide = () => {
    loaderContainer.innerHTML = ``;
  };
  return { show, hide };
};
