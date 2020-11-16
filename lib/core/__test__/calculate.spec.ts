import { Directions } from '../../models';
import { calculateDirection } from '../calculate_direction';

describe('calculateDirection', () => {
  const cases: { h: number; t: number; d: Directions }[] = [
    {
      h: 310,
      t: 75,
      d: Directions.right
    },
    {
      h: 75,
      t: 310,
      d: Directions.left
    },
    {
      h: 170,
      t: 200,
      d: Directions.right
    },
    {
      h: 70,
      t: 50,
      d: Directions.left
    }
  ];

  cases.forEach((c) => {
    it(`should return ${c.d}, if heading is ${c.h} and target is ${c.t}`, () => {
      expect(calculateDirection(c.h, c.t)).toEqual(c.d);
    });
  });
});
