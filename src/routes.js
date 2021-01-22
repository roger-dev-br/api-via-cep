import { Router } from 'express';

import logRequestsMiddleware from './app/middlewares/logRequests';

import cepController from './app/controllers/cepController';

const routes = new Router();

routes.use(logRequestsMiddleware);

// Busca CEP exato
routes.get('/cep/:cep', cepController.show);

// Busca CEP por UF + Cidade + Rua
routes.get('/cep', cepController.query);

export default routes;
