import { createAdController } from './create-ad.controller.js';
import { sessionController } from '../../shared/session/session.controller.js';

const createAdForm = document.querySelector('form');
const sessionContainer = document.querySelector('header');


sessionController(sessionContainer);

createAdController(createAdForm);
