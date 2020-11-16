import { InvalidRequest } from '../../errors';
import { apiErrorHandler } from '../api/api_error_handler';

import {
  getMockRequest,
  getMockResponse,
  getMockNextFunction
} from './helpers';

describe('Contollers', () => {
  describe('Api', () => {
    describe('apiErrorHandler', () => {
      it('should return response with proper error code', () => {
        const error = new InvalidRequest('test error');
        const response = apiErrorHandler(
          error,
          getMockRequest(),
          getMockResponse(),
          getMockNextFunction()
        );

        expect(response.status).toHaveBeenCalledWith(error.code);
        expect(response.json).toHaveBeenCalledWith({
          message: error.message
        });
      });
    });
  });
});
