import { Router } from 'express';
import { createFilmController } from '../../../../modules/film/useCases/createFilm';

const filmRouter = Router();

filmRouter.post('/films', (req, res) => {
  createFilmController.handle(req, res);
});

export { filmRouter };
