import { GetDirectionDto } from '../../dto';
import { InvalidRequest } from '../../errors';
import { Directions } from '../../models';
import { getDirection } from '../direction';

describe('Operations', () => {
  describe('direction', () => {
    it('should return proper direction', async () => {
      const dto = new GetDirectionDto({
        heading: 100,
        target: 200
      });

      await expect(getDirection(dto)).resolves.toMatchObject({
        direction: Directions.right
      });
    });

    it('should throw error for invalid input', async () => {
      const dto = new GetDirectionDto({
        heading: 990,
        target: 200
      });

      await expect(getDirection(dto)).rejects.toThrow(InvalidRequest);
    });
  });
});
