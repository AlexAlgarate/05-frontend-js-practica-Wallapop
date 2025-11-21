import { constants } from '../utils/constants.js';

export const getAds = async () => {
  try {
    const response = await fetch(`${constants.baseUrlSparrest}/api/ads?_expand=user`);
    
    if (!response.ok) {
      throw new Error('Error al cargar los anuncios');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
