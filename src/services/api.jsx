import axios from 'axios';
import PropTypes from 'prop-types';

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

export const getCredits = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/reviews`);
  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};

getMovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

getCredits.propTypes = {
  movieId: PropTypes.string.isRequired,
};

getReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

getSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};
