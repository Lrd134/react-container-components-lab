import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OlM1GpyhKq5EACBVyGG6z4xMiAvnyt0e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(reviews =>{
      this.setState(previousState => {
        return {
            ...previousState,
          reviews: reviews.results
        }
      })
    })
  }

  render() {
    const renderReviews = () => this.state.reviews.map(review => <MovieReviews reviewName={review.display_title}/>)
    
    return (
      <div className="latest-movie-reviews">
        {renderReviews()}
      </div>
    )
  }
}