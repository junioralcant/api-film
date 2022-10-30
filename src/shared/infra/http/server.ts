require('dotenv').config();
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { filmRouter } from './routes/film.routes';
import swaggerDocument from '../../../../swagger.json';
import { redoclyRouter } from './routes/redocly.routes';

const app = express();

app.use(cors());

app.use(
  '/api-swagger',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(express.json());

app.use(filmRouter, redoclyRouter);

app.listen(process.env.PORT || 3333, () =>
  console.log('Server in running on PORT 3333')
);
