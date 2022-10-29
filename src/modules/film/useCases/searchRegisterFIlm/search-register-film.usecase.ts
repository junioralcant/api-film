import { apiFilms } from '../../../../shared/infra/axios/axios.config';
import { ICreateFilmDTO } from '../../dtos/crete-film.dtos';
import { Film } from '../../entity/film.entity';
import { IFilmRepository } from '../../repositories/ifilm.repository';

interface ICreateFilm extends ICreateFilmDTO {
  id: string;
  movie_banner: string;
}

export class SearchAndRegisterFilmUseCase {
  constructor(private filmRepositoy: IFilmRepository) {}

  filmsCreated: Film[] = [];

  async execute() {
    const films = await apiFilms.get('/films?limit=50');

    const promise = films.data.map(async (film: ICreateFilm) => {
      const filmExists = await this.filmRepositoy.filmByTitle(
        film.title
      );

      if (!filmExists) {
        this.filmsCreated.push(film);

        await this.filmRepositoy.create({
          title: film.title,
          banner: film.movie_banner,
          description: film.description,
          director: film.director,
          producer: film.producer,
        });
      }
    });

    await Promise.all(promise);

    return this.filmsCreated;
  }
}
