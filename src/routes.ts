import { Express, Request, Response, NextFunction } from 'express';

// const OMDB_API_KEY = process.env['OMDB_API_KEY'];

export const registerRoutes = (app: Express) => {
  app.get('/healthcheck', healthcheck);
};

const healthcheck = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).send('OK');
}
