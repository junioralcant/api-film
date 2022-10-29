import { randomUUID } from 'crypto';

interface IFilmProps {
  title: string;
  banner: string;
  description: string;
  director: string;
  producer: string;
}

export class Film {
  id: string;
  title: string;
  banner: string;
  description: string;
  director: string;
  producer: string;

  private constructor(props: IFilmProps) {
    this.id = randomUUID();
    this.title = props.title;
    this.banner = props.banner;
    this.description = props.description;
    this.director = props.director;
    this.producer = props.producer;
  }

  static create(props: IFilmProps) {
    const film = new Film(props);
    return film;
  }
}
