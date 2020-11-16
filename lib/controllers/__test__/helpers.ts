import { Response, Request, NextFunction, Router } from 'express';

export function getMockResponse(): Response {
  const res: Partial<Response> = {};

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res as Response;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMockRequest(params: any = {}): Request {
  const req: Partial<Request> = {
    params
  };

  return req as Request;
}

export function getMockNextFunction(): NextFunction {
  const fn: NextFunction = jest.fn();

  return fn;
}

export function getRouter(): Router {
  const router: Partial<Router> = {};

  router.get = jest.fn().mockReturnValue(router);
  router.use = jest.fn().mockReturnValue(router);

  return router as Router;
}
