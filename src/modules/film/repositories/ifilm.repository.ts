import { ICreateFilmDTO } from '../dtos/crete-film.dtos';
import { Film } from '../entity/film.entity';

export interface IFilmRepository {
  create(data: ICreateFilmDTO): Promise<Film>;
}
