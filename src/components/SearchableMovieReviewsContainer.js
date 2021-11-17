import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OlM1GpyhKq5EACBVyGG6z4xMiAvnyt0e';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContrainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }
  componentDidMount() {
    fetch(URL.concat(this.state.searchTerm)).then(resp => resp.json()).then(reviews => {
        this.setState(previousState => {
          return {
            ...previousState,
            reviews: reviews.results
          }  
        })
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const child = event.target.children[0].value;
    this.setState(previousState => {
      return {
        ...previousState,
        searchTerm: child
      }
    })
    this.renderReview();
  }
  renderReview = () => this.state.reviews.map(review => <MovieReviews movieName={review.display_title}/>)
  render() {

    return (<div className="searchable-movie-reviews">
      <form  onSubmit={this.handleSubmit}>
      <input className="search-bar" type="text"/>
      </form>
    </div>)
  }
}