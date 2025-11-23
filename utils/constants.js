export const constants = {
  baseUrlSparrest: 'http://localhost:8000',
  mailRegExp: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
  tokenKey: 'token',
  imagePlaceholder: 'https://demofree.sirv.com/nope-not-here.jpg',
  redirectDelay: 1500,
  imageAdNotAvailable:
    'https://fotografias.lasexta.com/clipping/cmsimages01/2019/05/29/9B89AC82-4176-4127-89A2-F38F13E0A84E/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply',
};

export const eventListeners = {
  login: 'login-validation-error',
  signup: 'signup-validation-error',
  startListAds: 'start-fetching-ads',
  errorListAds: 'error-fetching-ads',
  finishListAds: 'finish-fetching-ads',
  startLogin: 'startLogin',
  finishLogin: 'finishLogin',
  startSignup: 'startSignup',
  finishSignup: 'finishSignup',
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
    invalidEmail: 'Email incorrecto',
    passwordMismatch: 'Las contraseñas no coinciden',
    successSignup: 'Usuario creado correctamente',
    errorSignp: 'Error creando un usuario',
  },
  login: {
    invalidEmail: 'Email incorrecto',
    invalidPassword: 'Contraseña incorrecta',
    errorLogin: 'Error iniciando sesión',
  },
  deleteAd: '¿Seguro que quieres borrar este anuncio?',
};
