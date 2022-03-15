import express from 'express';
import { registerRoutes } from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;
registerRoutes(app)
app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
