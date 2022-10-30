import { ICreateFilmDTO } from '../../dtos/crete-film.dtos';
import { IFilmRepository } from '../../repositories/ifilm.repository';
import { ParameterRequiredError } from '../../../../shared/infra/error/parameter-requered.error';

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
      throw new ParameterRequiredError(
        'Title/banner/description/director/producer is required.',
        422
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
