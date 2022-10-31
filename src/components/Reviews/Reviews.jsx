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
        console.log(reviews);
        setMovieReviews(reviews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
      {error && (
        <p>
          Something went wrong. We can't find trending movies. Please, try again
          later!
        </p>
      )}
      {movieReviews.length > 0 ? (
        <ReviewsList reviews={movieReviews} />
      ) : (
        <NotFoundText>We don't have any reviews for this movie.</NotFoundText>
      )}
    </>
  );
};
