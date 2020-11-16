import { Request, Response, NextFunction } from 'express';

import { GetDirectionDto } from '../../dto';
import { getDirection } from '../../operations';

export async function direction(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const dto = new GetDirectionDto(request.params);
    const direction = await getDirection(dto);

    return response.json(direction);
  } catch (error) {
    return next(error);
  }
}
