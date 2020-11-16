import { Router } from 'express';

import { direction, apiErrorHandler } from './api';

export function buildApi(router: Router): Router {
  router.get('/direction/:heading/:target', direction);
  router.use(apiErrorHandler);

  return router;
}
