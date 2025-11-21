import { constants } from '../utils/constants.js';

export const getAdDetail = async (idAd) => {
  let ad = null;

  try {
    const response = await fetch(
      `${constants.baseUrlSparrest}/api/ads/${idAd}?_expand=user`
    );
    if (!response.ok) {
      throw new Error();
    }
    ad = await response.json();
  } catch (error) {
    throw new Error('Anuncio no disponible');
  }
  return ad;
};

export const getUserData = async () => {
  let userData = null;
  const token = localStorage.getItem(constants.tokenKey);

  try {
    const response = await fetch(`${constants.baseUrlSparrest}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }
    userData = response.json();
  } catch (error) {
    throw new Error('El usuario no existe');
  }
  return userData;
};

export const deleteAd = async (idAd) => {
  let ad = null;
  const token = localStorage.getItem(constants.tokenKey);

  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads/${idAd}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    throw new Error('Error');
  }
  return ad;
};
