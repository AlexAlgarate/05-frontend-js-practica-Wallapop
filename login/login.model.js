import { constants } from '../utils/constants.js';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${constants.baseUrlSparrest}auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('\n DATA \n', data, '\n');
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.accessToken;
  } catch (error) {
    const errorMessage =
      error.cause === 'data' ? error.message : 'Error iniciando sesión';
    throw new Error(errorMessage);
  }
};
