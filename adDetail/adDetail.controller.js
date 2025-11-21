import { buildAdDetail } from './adDetail.view.js';
import { getAdDetail, deleteAd, getUserData } from './adDetail.model.js';

export const adDetailController = async (adDetailContainer, adId) => {
  let ad = null;

  const handlerRemoveAdButton = (userData) => {
    if (userData.id === ad.userId) {
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'btn-danger');
      removeButton.textContent = 'Borrar Ad';
      adDetailContainer.appendChild(removeButton);

      removeButton.addEventListener('click', async () => {
        const confirmDelete = confirm('¿Seguro que quieres borrar el tweet?');
        if (confirmDelete) {
          await deleteAd(ad.id);
          window.location.href = '/';
        }
      });
    }
  };

  try {
    ad = await getAdDetail(adId);
    const adDetail = document.createElement('div');
    adDetail.innerHTML = buildAdDetail(ad);
    adDetailContainer.appendChild(adDetail);
  } catch (error) {
    alert(error);
    // window.location.href = '/';
  }

  try {
    const userData = getUserData();
    handlerRemoveAdButton(userData);
  } catch (error) {
    alert(error)
  }
};
