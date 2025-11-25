import { alertMessages, constants } from '../../utils/constants.js';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${constants.baseUrlSparrest}/auth/login`, {
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

    if (!response.ok) {
      throw new Error(data.message, { cause: 'data' });
    }

    return data.accessToken;
  } catch (error) {
    const errorMessage =
      error.cause === 'data' ? error.message : alertMessages.login.errorLogin;
    throw new Error(errorMessage);
  }
};
