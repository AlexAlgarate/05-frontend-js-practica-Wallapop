import { getAds } from './listAds.model.js';
import { adsView, buildEmptyAds } from './listAds.view.js';
import { eventListeners } from '../utils/constants.js';

export const adsController = async (adsContainer) => {
  let adsToShow = [];

  try {
    const startEvent = new CustomEvent(eventListeners.startListAds);
    adsContainer.dispatchEvent(startEvent);
    adsToShow = await getAds();
  } catch (error) {
    const errorEvent = new CustomEvent(eventListeners.errorListAds, {
      detail: {
        message: error.message,
        type: 'error',
      },
    });
    adsContainer.dispatchEvent(errorEvent);
  } finally {
    const finallyEvent = new CustomEvent(eventListeners.finishListAds);
    adsContainer.dispatchEvent(finallyEvent);
  }

  if (adsToShow === 0) {
    adsContainer.innerHTML = buildEmptyAds();
  }

  adsToShow.forEach((ad) => {
    const newAd = document.createElement('div');
    newAd.classList.add('ad');

    newAd.style.border = '1px solid #000';
    newAd.style.padding = '1rem';
    newAd.style.marginBottom = '10px';
    newAd.style.borderRadius = '8px';
    newAd.style.cursor = 'pointer';

    newAd.innerHTML = adsView(ad);

    newAd.addEventListener('click', () => {
      window.location.href = `ad-detail.html?adId=${ad.id}`;
    });
    adsContainer.appendChild(newAd);
  });
};
