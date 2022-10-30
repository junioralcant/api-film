import { Request, Response } from 'express';
import { IFilmRepository } from '../../repositories/ifilm.repository';
import { ListFilmUseCase } from './list-film.usecase';

export class ListFilmCrontroller {
  constructor(private filmRepository: IFilmRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { skip, take } = request.query;

      const filmListUseCase = new ListFilmUseCase(
        this.filmRepository
      );

      const films = await filmListUseCase.execute({
        skip: Number(skip),
        take: Number(take),
      });

      return response.json(films);
    } catch (error: any) {
      return response.json({ error: error.message });
    }
  }
}
