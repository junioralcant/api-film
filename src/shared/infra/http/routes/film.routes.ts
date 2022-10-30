import { Router } from 'express';
import { listFilmController } from '../../../../modules/film/useCases/ listFilm';
import { createFilmController } from '../../../../modules/film/useCases/createFilm';
import { searchAndRegisterFilmController } from '../../../../modules/film/useCases/searchRegisterFIlm';

const filmRouter = Router();

filmRouter.get('/films', (req, res) => {
  listFilmController.handle(req, res);
});

filmRouter.post('/films', (req, res) => {
  createFilmController.handle(req, res);
});

filmRouter.post('/films/update', (req, res) => {
  searchAndRegisterFilmController.handle(req, res);
});

export { filmRouter };
