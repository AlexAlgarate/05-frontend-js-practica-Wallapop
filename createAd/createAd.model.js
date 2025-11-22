import { constants } from '../utils/constants.js';

export const createAd = async (adContent) => {
  const token = localStorage.getItem(constants.tokenKey);

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
    return data
  } catch (error) {
    const errorMessage = error ? error.message : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
};
