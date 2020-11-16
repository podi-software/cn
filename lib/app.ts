import express from 'express';

import { buildApi, defaultErrorHandler } from './controllers';

export function getApp(): express.Application {
  const app = express();

  app.use(express.json());
  app.use('/api', buildApi(express.Router()));
  app.use(defaultErrorHandler);

  return app;
}
