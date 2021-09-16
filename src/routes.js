import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CompanyController from './app/controllers/CompanyController';
import DesktopsController from './app/controllers/DesktopsController';
import ContributorsController from './app/controllers/ContributorsController';

import authMiddleware from './app/middleware/auth';
import errorMiddleware from './app/middleware/error';

const routes = new Router();

// routes users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// routes sessions
routes.post('/sessions', SessionController.store);

// routes company
routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.store);

// esse middleware so é executado apos ele ser declarado.
// logo as rotas posts acima não é executado esse middleware
routes.use(errorMiddleware); // middleware global de auth
routes.use(authMiddleware); // middleware global de auth

//routes desktops
routes.get('/desktops', DesktopsController.index);

//routes contributors
routes.get('/contributors', ContributorsController.index);

module.exports = routes;
