import { buildAdDetail, buildAdNotFound, buildAdError } from './adDetail.view.js';
import { getAdDetail, deleteAd, getUserData } from './adDetail.model.js';
import { constants, alertMessages } from '../utils/constants.js';

const createDeleteButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.textContent = 'Borrar Anuncio';
  return button;
};

const handleDeleteClick = async (ad) => {
  const confirmDelete = confirm(alertMessages.deleteAd);

  if (confirmDelete) {
    try {
      await deleteAd(ad.id);
      setTimeout(() => {
        window.location.href = '/';
      }, constants.redirectDelay);
    } catch (error) {
      alert(`Error al borrar: ${error.message}`);
    }
  }
};

const renderDeleteButton = (container, ad, userData) => {
  if (userData.id === ad.userId) {
    const deleteButton = createDeleteButton();

    deleteButton.addEventListener('click', () => handleDeleteClick(ad));

    const cardBody = container.querySelector('.card-body');
    cardBody.appendChild(deleteButton);
  }
};

const renderAdDetail = (container, ad) => {
  const adDetail = document.createElement('div');
  adDetail.innerHTML = buildAdDetail(ad);
  container.appendChild(adDetail);
};

export const adDetailController = async (adDetailContainer, adId) => {
  try {
    const ad = await getAdDetail(adId);

    renderAdDetail(adDetailContainer, ad);

    try {
      const userData = await getUserData();

      renderDeleteButton(adDetailContainer, ad, userData);
    } catch (error) {
      const userErrorEvent = new CustomEvent('not-user-found', {
        detail: {
          message: error.message,
          type: 'error',
        },
      });
      adDetailContainer.dispatchEvent(userErrorEvent);
    }
  } catch (error) {
    if (error.type === '404') {
      adDetailContainer.innerHTML = buildAdNotFound();
    } else {
      adDetailContainer.innerHTML = buildAdError(
        error.message === 'ErrorConnection'
          ? 'No se pudo conectar con el servidor'
          : 'Error interno'
      );
    }
  }
};
