import { constants, alertMessages} from '../../utils/constants.js';

export const getAds = async () => {
  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads?_expand=user`);
    if (!response.ok) {
      throw new Error(alertMessages.listAds);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
