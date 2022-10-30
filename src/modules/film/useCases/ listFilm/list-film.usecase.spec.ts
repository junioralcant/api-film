import { FilmRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/film.repository.memory';
import { ListFilmUseCase } from './list-film.usecase';

let filmRepositoryInMemory: FilmRepositoryInMemory;
let listFilmUseCase: ListFilmUseCase;

describe('search and register films', () => {
  beforeEach(() => {
    filmRepositoryInMemory = new FilmRepositoryInMemory();
    listFilmUseCase = new ListFilmUseCase(filmRepositoryInMemory);
  });

  it('should be able listing all films', async () => {
    const film = {
      title: 'Earwig and the Witch',
      description:
        'An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic',
      banner:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR58evDjPxwoszxQecrmPwFPjrjFN5b-al7nSYoT0kTnZBOEcEB',
      director: 'José Padilha',
      producer: 'Leonardo Edde',
    };

    const film2 = {
      title: 'The Wind Rises',
      description:
        'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.',
      banner:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR58evDjPxwoszxQecrmPwFPjrjFN5b-al7nSYoT0kTnZBOEcEB',
      director: 'José Padilha',
      producer: 'Leonardo Edde',
    };

    await filmRepositoryInMemory.create(film);

    await filmRepositoryInMemory.create(film2);

    const filmPafinate = {
      skip: 0,
      take: 10,
    };

    const films = await listFilmUseCase.execute(filmPafinate);

    expect(films.length === 2).toBeTruthy();
  });
});
