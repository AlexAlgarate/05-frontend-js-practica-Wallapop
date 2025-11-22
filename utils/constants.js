export const constants = {
  baseUrlSparrest: 'http://localhost:8000',
  mailRegExp: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
  tokenKey: 'token',
  imagePlaceholder: 'https://demofree.sirv.com/nope-not-here.jpg',
  redirectDelay: 3000,
};

export const eventListeners = {
  login: 'login-validation-error',
  signup: 'signup-validation-error',
  startListAds: 'start-fetching-ads',
  errorListAds: 'error-fetching-ads',
  finishListAds: 'finish-fetching-ads',
};

export const querySelectors = {
  createAdForm: {
    productName: '#productName',
    productDescription: '#productDescription',
    productPrice: '#productPrice',
    productImage: '#productImage',
    switchSalePurchase: '#switchCompraVenta',
    labelSalePurhase: '#labelCompraVenta',
  },
  authenticateUser: {
    email: '#email',
    password: '#password',
    passwordConfirm: '#passwordConfirm',
    emailError: '#email-error',
    passwordError: '#password-error',
  },
  session: {
    closeSession: '#closeSession',
  },
};

export const switchOptionsCreateAd = {
  sale: 'Venta',
  purchase: 'Compra',
};

export const alertMessages = {
  signup: {
    invalidEmail: 'Email incorrecto, pruebe de nuevo.',
    passwordMismatch: 'Las contraseñas no coinciden.',
    successSignup: 'Usuario creado correctamente',
  },
  login: {
    invalidEmail: 'Email incorrecto, pruebe de nuevo',
    invalidPassword: 'Contraseña incorrecta, pruebe de nuevo',
  },
  deleteAd: '¿Seguro que quieres borrar este anuncio?',
};
