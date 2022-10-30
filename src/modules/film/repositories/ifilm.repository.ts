import { ICreateFilmDTO } from '../dtos/crete-film.dtos';
import { IFilterListFilmDTO } from '../dtos/filter-list-film.dots';
import { Film } from '../entity/film.entity';

export interface IFilmRepository {
  create(data: ICreateFilmDTO): Promise<Film>;

  filmByTitle(title: string): Promise<Film | undefined>;

  list(date: IFilterListFilmDTO): Promise<Film[]>;
}
