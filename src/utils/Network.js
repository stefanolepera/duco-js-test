import axios from 'axios';
import axiosCancel from 'axios-cancel';

axiosCancel(axios, {
    debug: false
  });

export const fetchCharacters = (query, requestId) => axios.get(`https://swapi.co/api/people/?search=${query}`, {
    requestId: requestId
  });

export const fetchFilms = () => axios.get(`https://swapi.co/api/films/`);