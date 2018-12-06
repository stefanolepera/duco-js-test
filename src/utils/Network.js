import axios from 'axios';

export const fetchCharacters = query => axios.get(`https://swapi.co/api/people/?search=${query}`);

export const fetchFilms = () => axios.get(`https://swapi.co/api/films/`);