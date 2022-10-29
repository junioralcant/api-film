import { IFilmRepository } from '../../repositories/ifilm.repository';

export class ListFilmUseCase {
  constructor(private filmRepository: IFilmRepository) {}

  async execute() {
    const films = await this.filmRepository.list();

    return films;
  }
}
