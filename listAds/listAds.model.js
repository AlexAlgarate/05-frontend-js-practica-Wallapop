import { constants } from '../utils/constants.js';

export const getAds = async () => {
  let ads = [];

  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads?_expand=user`);
    ads = response.json();
  } catch (error) {
    throw new Error(error.message);
  }
  return ads;
};
