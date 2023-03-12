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

export default ReviewsInfo;
