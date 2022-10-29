import axios from 'axios';

const apiFilms = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com/',
});

export { apiFilms };
