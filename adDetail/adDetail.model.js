import { constants } from '../utils/constants.js';

export const getAdDetail = async (idAd) => {
  let ad = null;

  try {
    const response = await fetch(
      `${constants.baseUrlSparrest}/api/ads/${idAd}?_expand=user`
    );
    if (response.status === 404) {
      const error = new Error('AdNotFound');
      error.type = '404';
      throw error;
    }

    if (!response.ok) {
      throw new Error('ErrorServer');
    }

    return await response.json();
  } catch (error) {
    if (error.type === '404') {
      throw error;
    }
    throw new Error('ErrorConnection');
  }
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
    throw new Error('El usuario no existe o no ha iniciado sesión');
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
