import { FilmRepositoryInMemory } from '../../repositories/infra/implementations/in-memory/film.repository.memory';
import { CreateFilmUseCase } from './create-film.usecase';

let filmRepositoryInMemory: FilmRepositoryInMemory;
let createFilmeUseCase: CreateFilmUseCase;

describe('Create film', () => {
  beforeEach(() => {
    filmRepositoryInMemory = new FilmRepositoryInMemory();
    createFilmeUseCase = new CreateFilmUseCase(
      filmRepositoryInMemory
    );
  });

  it('should be able create new film', async () => {
    const film = {
      title: 'Tropa de Elite 2: O Inimigo Agora é Outro',
      description:
        'Nascimento é afastado do Bope após uma operação que dá errado e vai para a Secretaria de Segurança Pública do Rio.',
      banner:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR58evDjPxwoszxQecrmPwFPjrjFN5b-al7nSYoT0kTnZBOEcEB',
      director: 'José Padilha',
      producer: 'Leonardo Edde',
    };

    const filmCreated = await createFilmeUseCase.execute(film);

    expect(filmCreated).toHaveProperty('id');
  });

  it('should not be able create new film without name email description banner director and producer', () => {
    expect(async () => {
      const film = {
        title: '',
        description: '',
        banner:
          'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR58evDjPxwoszxQecrmPwFPjrjFN5b-al7nSYoT0kTnZBOEcEB',
        director: 'José Padilha',
        producer: 'Leonardo Edde',
      };

      await createFilmeUseCase.execute(film);
    }).rejects.toBeInstanceOf(Error);
  });
});
