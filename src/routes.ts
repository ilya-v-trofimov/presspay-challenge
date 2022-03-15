import { Express, Request, Response, NextFunction } from 'express';

export const registerRoutes = (app: Express) => {
  app.get('/healthcheck', healthcheck);
};

const healthcheck = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send('OK');
}
