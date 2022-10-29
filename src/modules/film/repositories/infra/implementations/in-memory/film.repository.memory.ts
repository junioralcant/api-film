import { IFilmRepository } from '../../../ifilm.repository';
import { Film } from '../../../../entity/film.entity';
import { ICreateFilmDTO } from '../../../../dtos/crete-film.dtos';

export class FilmRepositoryInMemory implements IFilmRepository {
  films: Film[] = [];

  async create(data: ICreateFilmDTO): Promise<Film> {
    const film = Film.create(data);
    this.films.push(film);
    return film;
  }
}
