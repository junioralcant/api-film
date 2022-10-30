import { Request, Response } from 'express';
import { ICreateFilmDTO } from '../../dtos/crete-film.dtos';
import { IFilmRepository } from '../../repositories/ifilm.repository';
import { CreateFilmUseCase } from './create-film.usecase';

export class CreateFilmController {
  constructor(private filmRepository: IFilmRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const { title, banner, description, director, producer } =
        request.body;

      const createFilmUseCase = new CreateFilmUseCase(
        this.filmRepository
      );

      const film = await createFilmUseCase.execute({
        title,
        banner,
        description,
        director,
        producer,
      });

      return response.json(film);
    } catch (error: any) {
      return response
        .status(error.statusCode)
        .json({ error: error.message });
    }
  }
}
