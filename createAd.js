import { createAdController } from './createAd/createAd.controller.js';
import { sessionController } from './session/session.controller.js';

const createAdForm = document.querySelector('form');
const sessionContainer = document.querySelector('header');


sessionController(sessionContainer);

createAdController(createAdForm);
