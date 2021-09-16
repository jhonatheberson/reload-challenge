import { Router } from 'express';

// controller
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CompanyController from './app/controllers/CompanyController';
import DesktopsController from './app/controllers/DesktopsController';
import ContributorsController from './app/controllers/ContributorsController';

// middlewares
import authMiddleware from './app/middleware/auth';
import errorMiddleware from './app/middleware/error';

const routes = new Router();

routes.use(errorMiddleware); // middleware error global

// routes users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// routes sessions
routes.post('/sessions', SessionController.store);

// this middleware only runs after it is declared
// soon routes posts above does not run this middleware
routes.use(authMiddleware); // middleware auth global

// routes company
routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.store);

//routes desktops
routes.get('/desktops', DesktopsController.index);

//routes contributors
routes.get('/contributors', ContributorsController.index);

module.exports = routes;
