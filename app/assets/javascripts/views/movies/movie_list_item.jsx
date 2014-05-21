/** @jsx React.DOM */
/*globals App, React */
"use strict";

var MovieListItem = App.Views.MovieListItem = React.createClass({
  render: function () {
    var movie = this.props.movie;

    return (
      <a className="list-group-item">
        <h4 className="list-group-item-heading">
          {movie.get('name')}
        </h4>
        <div className="pull-right">
          <Rating rating={movie.rating()} movie={movie} />
        </div>
        <p className="list-group-item-text">
          {moment(movie.get('released_at')).year()}
        </p>
      </a>
    );
  }
});

var Rating = React.createClass({
  getInitialState: function() {
    this.rating = this.props.rating;
    var value = this.rating.get('rating');
    return { rating: value, movie_id: this.props.movie_id };
  },

  render: function () {
    return (
      <input type="number" data-max="5" data-min="1" value={this.state.rating} data-movie-id={this.state.movie_id} className="rating pull-right"></input>
    );
  },
});

var MovieList = React.createClass({
  componentDidMount: function () {
    $('.rating').rating();
    $('.list-group').on('change', '.rating', function (event) {
      var newRating = event.currentTarget.value,
        movieId = $(event.currentTarget).data('movie-id');

      var movie = App.movies.get(movieId);
      movie.rating().save({ rating: newRating });
    });
  },

  render: function () {
    var movies = this.props.movies;
    return (
      <div className="movie-list">
        <h1>Movies</h1>
        <div className="list-group">
          {movies.map(function (movie) {
            return <MovieListItem movie={movie} />;
          })}
        </div>
      </div>
    );
  }
});

var StatList = React.createClass({
  getInitialState: function () {
    var data = JSON.parse($('#user-stats').html());
    var complete = 100 * data.rating_count / data.movie_count;
    return {
      complete: complete,
      ratings: data.rating_count,
      movies: data.movie_count
    };
  },

  render: function () {
    console.log(this.state);
    return (
      <div>
        <h2>Progress</h2>
        <div className="progress progress-striped active">
          <div className="progress-bar" role="progressbar" aria-valuenow={this.state.complete} aria-valuemin="0" aria-valuemax="100" style={{ width: this.state.complete }}>
            <span className="sr-only">{this.state.complete + '% Complete'}</span>
          </div>
        </div>
        You've watched {this.state.ratings} out of {this.state.movies} Disney Movies!
      </div>
    );
  }
});
