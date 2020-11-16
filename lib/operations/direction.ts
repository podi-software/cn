import { calculateDirection } from '../core';
import { GetDirectionDto } from '../dto';
import { IDirection } from '../models';

export async function getDirection(
  getDirectionDto: GetDirectionDto
): Promise<IDirection> {
  await getDirectionDto.validateRequest();

  const direction = calculateDirection(
    getDirectionDto.heading,
    getDirectionDto.target
  );

  return {
    direction
  };
}
