import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';
import errorMiddleware from './app/middleware/error';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);


routes.post('/sessions', SessionController.store);

// esse middleware so é executado apos ele ser declarado.
// logo as rotas posts acima não é executado esse middleware
// routes.use(errorMiddleware); // middleware global de auth
routes.use(authMiddleware); // middleware global de auth
// routes.put('/users', UserController.update);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Diego Fernandes',
//     email: 'diego@rocketseat.com.br',
//     password_hash: '12345678',
//   });

//   return res.json(user);
// });

module.exports = routes;
