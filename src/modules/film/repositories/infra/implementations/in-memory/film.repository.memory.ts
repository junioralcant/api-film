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

  async filmByTitle(title: string): Promise<Film | undefined> {
    const film = this.films.find((film) => film.title === title);

    return film || undefined;
  }

  async list(): Promise<Film[]> {
    return this.films;
  }
}
