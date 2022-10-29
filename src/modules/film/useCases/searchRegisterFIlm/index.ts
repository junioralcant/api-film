import { FilmRepository } from '../../repositories/infra/implementations/prisma/film.repository.prisma';
import { SearchAndRegisterFilmController } from './search-register-film.controller';

const filmRepository = new FilmRepository();
const searchAndRegisterFilmController =
  new SearchAndRegisterFilmController(filmRepository);

export { searchAndRegisterFilmController };
