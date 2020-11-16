import { Response } from 'express';

import { InvalidRequest } from '.././../errors';
import { Directions } from '../../models';
import { direction } from '../api/direction';

import {
  getMockRequest,
  getMockResponse,
  getMockNextFunction
} from './helpers';

describe('Contollers', () => {
  describe('Api', () => {
    describe('direction', () => {
      it('should return response with proper direction', async () => {
        const response = <Response>await direction(
          getMockRequest({
            heading: 100,
            target: 110
          }),
          getMockResponse(),
          getMockNextFunction()
        );

        expect(response.json).toHaveBeenCalledWith({
          direction: Directions.right
        });
      });

      it('should call the next function with proper error', async () => {
        const nextFunction = getMockNextFunction();

        await direction(
          getMockRequest({
            heading: 100,
            target: 499
          }),
          getMockResponse(),
          nextFunction
        );

        expect(nextFunction).toHaveBeenCalledWith(
          new InvalidRequest(
            '- property target has failed the following constraints: max'
          )
        );
      });
    });
  });
});
