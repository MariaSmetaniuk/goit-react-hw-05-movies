import axios from 'axios';

const API_KEY = '84c663b0d9ed75aa92613d5f25b42077';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('trending/movie/day');
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`movie/${movieId}`);
  return data;
};
