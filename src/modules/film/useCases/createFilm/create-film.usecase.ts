import { ICreateFilmDTO } from '../../dtos/crete-film.dtos';
import { IFilmRepository } from '../../repositories/ifilm.repository';

export class CreateFilmUseCase {
  constructor(private filmRepository: IFilmRepository) {}
  async execute({
    title,
    banner,
    description,
    director,
    producer,
  }: ICreateFilmDTO) {
    if (!title || !banner || !description || !director || !producer) {
      throw new Error(
        'Title/banner/description/director/producer is required.'
      );
    }

    const film = await this.filmRepository.create({
      title,
      banner,
      description,
      director,
      producer,
    });

    return film;
  }
}
