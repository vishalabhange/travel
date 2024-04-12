import React, { useState } from 'react';
import '../Css/Review.css'; // Import your CSS file for styling

const Review = () => {
  const [reviews, setReviews] = useState([
    { text: 'Had an amazing time exploring the mountains!', rating: 5 },
    { text: 'The beach vacation was so relaxing. Loved it!', rating: 4 },
    { text: 'The cultural tour provided a unique and enriching experience.', rating: 5 },
  ]);

  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (rating) => {
    setNewRating(rating);
  };

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      setReviews((prevReviews) => [
        ...prevReviews,
        { text: newReview, rating: newRating },
      ]);
      setNewReview('');
      setNewRating(5);
    }
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      <div className="review-form">
        <textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={handleReviewChange}
        />
        <div className="rating-container">
          <p>Rating:</p>
          {[1, 2, 3, 4, 5].map((rating) => (
            <span
              key={rating}
              className={newRating >= rating ? 'active' : ''}
              onClick={() => handleRatingChange(rating)}
            >
              ★
            </span>
          ))}
        </div>
        <button className="submit-button" onClick={handleAddReview}>
          Add Review
        </button>
      </div>
      <div className="review-list">
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>{review.text}</p>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={review.rating >= star ? 'active' : ''}>
                      ★
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Review;
