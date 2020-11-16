import { direction, apiErrorHandler } from '../api';
import { buildApi } from '../build_api';
import { getRouter } from './helpers';

describe('Contollers', () => {
  describe('buildApi', () => {
    it('should return the same router', () => {
      const router = getRouter();

      expect(buildApi(router)).toBe(router);
    });

    it('should add proper routes', () => {
      const router = buildApi(getRouter());

      expect(router.get).toHaveBeenCalledWith(
        '/direction/:heading/:target',
        direction
      );
      expect(router.use).toHaveBeenCalledWith(apiErrorHandler);
    });
  });
});
