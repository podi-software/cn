import { defaultErrorHandler } from '../default_error_handler';

import { getMockRequest, getMockResponse } from './helpers';

describe('Contollers', () => {
  describe('defaultErrorHandler', () => {
    it('should return response with proper error code', () => {
      const response = defaultErrorHandler(getMockRequest(), getMockResponse());

      expect(response.status).toHaveBeenCalledWith(400);
      expect(response.json).toHaveBeenCalledWith({
        message: 'invalid operation'
      });
    });
  });
});
