import { FilmRepository } from '../../repositories/infra/implementations/prisma/film.repository.prisma';
import { ListFilmCrontroller } from './list-film.controller';

const filmRepository = new FilmRepository();

const listFilmController = new ListFilmCrontroller(filmRepository);

export { listFilmController };
