import { InvalidRequest } from '../../errors';
import { GetDirectionDto } from '../get_direction_dto';

describe('Dto', () => {
  describe('GetDirectionDto', () => {
    it('should not throw a validation error for valid request', async () => {
      const getDirectionDto = new GetDirectionDto({
        heading: 200,
        target: 200
      });
      await expect(getDirectionDto.validateRequest()).resolves.toBeFalsy();
    });

    it('should parse and assign the proper values', async () => {
      const getDirectionDto = new GetDirectionDto({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        heading: '200' as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        target: '200' as any
      });

      expect(getDirectionDto.heading).toBe(200);
      expect(getDirectionDto.target).toBe(200);
    });

    describe('invalid string inputs', () => {
      const cases: [string, number][] = [
        ['abc', 100],
        ['1eed', 100],
        ['one', 100]
      ];

      for (const singleCase of cases) {
        it(`should fail, if head is ${singleCase[0]} and target is ${singleCase[0]}`, async () => {
          const getDirectionDto = new GetDirectionDto({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            heading: singleCase[0] as any,
            target: singleCase[1]
          });
          await expect(getDirectionDto.validateRequest()).rejects.toThrow(
            InvalidRequest
          );
        });

        it(`should fail, if head is ${singleCase[1]} and target is ${singleCase[0]}`, async () => {
          const getDirectionDto = new GetDirectionDto({
            heading: singleCase[1],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            target: singleCase[0] as any
          });
          await expect(getDirectionDto.validateRequest()).rejects.toThrow(
            InvalidRequest
          );
        });
      }
    });

    describe('invalid numerical inputs', () => {
      const cases: [number, number][] = [
        [-1, 100],
        [NaN, 100],
        [1.1, 100],
        [Infinity, 100],
        [361, 250]
      ];

      for (const singleCase of cases) {
        it(`should fail, if head is ${singleCase[0]} and target is ${singleCase[0]}`, async () => {
          const getDirectionDto = new GetDirectionDto({
            heading: singleCase[0],
            target: singleCase[1]
          });
          await expect(getDirectionDto.validateRequest()).rejects.toThrow(
            InvalidRequest
          );
        });

        it(`should fail, if head is ${singleCase[1]} and target is ${singleCase[0]}`, async () => {
          const getDirectionDto = new GetDirectionDto({
            heading: singleCase[1],
            target: singleCase[0]
          });
          await expect(getDirectionDto.validateRequest()).rejects.toThrow(
            InvalidRequest
          );
        });
      }
    });
  });
});
