import { Request, Response } from 'express';
import { IFilmRepository } from '../../repositories/ifilm.repository';
import { SearchAndRegisterFilmUseCase } from './search-register-film.usecase';

export class SearchAndRegisterFilmController {
  constructor(private filmRepository: IFilmRepository) {}
  async handle(request: Request, response: Response) {
    try {
      const searchAndRegisterFilmUseCase =
        new SearchAndRegisterFilmUseCase(this.filmRepository);

      const filmsCreated =
        await searchAndRegisterFilmUseCase.execute();

      return response.json(filmsCreated);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
