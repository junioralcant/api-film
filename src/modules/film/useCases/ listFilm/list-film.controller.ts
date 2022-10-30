import { Request, Response } from 'express';
import { IFilmRepository } from '../../repositories/ifilm.repository';
import { ListFilmUseCase } from './list-film.usecase';

export class ListFilmCrontroller {
  constructor(private filmRepository: IFilmRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const filmListUseCase = new ListFilmUseCase(
        this.filmRepository
      );

      const films = await filmListUseCase.execute();

      return response.json(films);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
