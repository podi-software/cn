import { Request, Response } from 'express';

export function defaultErrorHandler(
  // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request: Request,
  response: Response
): Response {
  return response.status(400).json({ message: 'invalid operation' });
}
