import express from 'express';
import cors from 'cors';
import { filmRouter } from './routes/film.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(filmRouter);

app.listen(3333, () => console.log('Server in running on PORT 3333'));
