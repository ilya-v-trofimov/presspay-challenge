import express from 'express';
import { registerRoutes } from './routes';

const OMDB_API_KEY = process.env['OMDB_API_KEY'];
const app = express();
const port = 3000;
registerRoutes(app)
app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
