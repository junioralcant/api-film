import { FilmRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/film.repository.memory';
import { SearchAndRegisterFilmUseCase } from './search-register-film.usecase';

let searchAndRegisterFilmUseCase: SearchAndRegisterFilmUseCase;
let filmRepositoryInMemory: FilmRepositoryInMemory;
describe('search and register films', () => {
  beforeEach(() => {
    filmRepositoryInMemory = new FilmRepositoryInMemory();
    searchAndRegisterFilmUseCase = new SearchAndRegisterFilmUseCase(
      filmRepositoryInMemory
    );
  });

  it('should be able search and register films', async () => {
    await searchAndRegisterFilmUseCase.execute();

    const films = await filmRepositoryInMemory.list();

    expect(films.length > 0).toBeTruthy();
  });

  it('should not be able search and register films without title exists', async () => {
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

    const filmsCreated = await searchAndRegisterFilmUseCase.execute();

    const films = await filmRepositoryInMemory.list();

    expect(films.length > filmsCreated.length).toBeTruthy();
  });
});
