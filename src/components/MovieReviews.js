// Code MovieReviews Here
import React from 'react';
const MovieReviews = ({movieName}) => (<div className="review-list"><div className='review' key={movieName}>{movieName}</div></div>)


export default MovieReviews;