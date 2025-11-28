import { buildAdDetail, buildAdNotFound, buildAdError } from './ad-detail.view.js';
import { getAdDetail, deleteAd, getUserData } from './ad-detail.model.js';
import { constants, alertMessages, ROUTES } from '../../utils/constants.js';

const createButton = (btnClass, textButton) => {
  const button = document.createElement('button');
  button.classList.add('btn', btnClass);
  button.textContent = textButton;
  return button;
};

const handleDeleteClick = async (ad) => {
  const confirmAction = confirm(alertMessages.deleteAd);

  if (confirmAction) {
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

const renderSessionButtons = (container, ad, userData) => {
  if (userData.id === ad.userId) {
    const buttonsContainer = container.querySelector('#deleteEditBtn');

    if (buttonsContainer) {
      const editButton = createButton('btn-warning', 'Editar Anuncio');
      editButton.addEventListener('click', () => {
        window.location.href = `${ROUTES.CREATE_AD}?adId=${ad.id}`;
      });

      const deleteButton = createButton('btn-danger', 'Borrar Anuncio');
      deleteButton.addEventListener('click', () => handleDeleteClick(ad));

      buttonsContainer.appendChild(editButton);
      buttonsContainer.appendChild(deleteButton);
    }
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
      // Si hay session --> botones editar/borrar
      const userData = await getUserData();
      renderSessionButtons(adDetailContainer, ad, userData);
    } catch (error) {}
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
