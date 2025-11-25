import { constants, alertMessages } from '../../utils/constants.js';
import { getTokenLocalStorage } from '../../utils/get-token.js';

export const createAd = async (adContent) => {
  const token = getTokenLocalStorage(constants.tokenKey);

  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...adContent,
        createdAt: new Date().toLocaleDateString(),
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Could not create ad');
    }
    return data;
  } catch (error) {
    const errorMessage = error ? error.message : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
};

export const getAdData = async (adId) => {
  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads/${adId}`);
    if (!response.ok) {
      throw new Error(alertMessages.createAd.getAdData);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateAd = async (adId, adContent) => {
  const token = getTokenLocalStorage(constants.tokenKey);

  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads/${adId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...adContent,
        createdAt: new Date().toLocaleDateString(),
      }),
    });

    if (!response.ok) {
      throw new Error(alertMessages.createAd.updateAd);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
