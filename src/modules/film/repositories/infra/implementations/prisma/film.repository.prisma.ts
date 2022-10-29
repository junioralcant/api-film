import { prismaClient } from '../../../../../../shared/infra/database/prisma.config';
import { ICreateFilmDTO } from '../../../../dtos/crete-film.dtos';
import { Film } from '../../../../entity/film.entity';
import { IFilmRepository } from '../../../ifilm.repository';

export class FilmRepository implements IFilmRepository {
  async create({
    title,
    banner,
    description,
    director,
    producer,
  }: ICreateFilmDTO): Promise<Film> {
    const film = await prismaClient.film.create({
      data: { title, banner, description, director, producer },
    });

    return film;
  }
}
