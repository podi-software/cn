import { Request, Response, NextFunction } from 'express';

import { IError } from '../../errors';

export function apiErrorHandler(
  error: IError,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Response {
  return response.status(error.code).json({
    message: error.message
  });
}
