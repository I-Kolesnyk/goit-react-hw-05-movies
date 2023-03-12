import PropTypes from 'prop-types';
import { ReviewsList, ReviewItem, ReviewTitle } from './ReviewsInfo.styled';

function ReviewsInfo({ reviews }) {
  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <ReviewTitle>{author}</ReviewTitle>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewsList>
  );
}

ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default ReviewsInfo;
