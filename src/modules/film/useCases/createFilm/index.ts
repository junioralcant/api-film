import { FilmRepository } from '../../repositories/infra/implementations/prisma/film.repository.prisma';
import { CreateFilmController } from './create-film.controller';

const filmRepository = new FilmRepository();
const createFilmController = new CreateFilmController(filmRepository);

export { createFilmController };
