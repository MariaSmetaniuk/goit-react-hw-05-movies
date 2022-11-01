import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { NotFoundText } from './Reviews.styled';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const reviews = await getReviews(movieId);
        if (reviews.length === 0) {
          setError("We don't have any reviews for this movie.");
          return;
        }
        setMovieReviews(reviews);
      } catch (error) {
        setError('Something went wrong. Please, try again later!');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && <NotFoundText>{error}</NotFoundText>}
      {movieReviews.length > 0 && <ReviewsList reviews={movieReviews} />}
    </>
  );
};
