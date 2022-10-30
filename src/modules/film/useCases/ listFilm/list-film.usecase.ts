import { IFilterListFilmDTO } from '../../dtos/filter-list-film.dots';
import { IFilmRepository } from '../../repositories/ifilm.repository';

export class ListFilmUseCase {
  constructor(private filmRepository: IFilmRepository) {}

  async execute({ skip, take }: IFilterListFilmDTO) {
    const films = await this.filmRepository.list({
      skip: skip || 0,
      take: take || 10,
    });

    return films;
  }
}
