/** @jsx React.DOM */
/*globals App, React */
"use strict";

var MovieListItem = App.Views.MovieListItem = React.createClass({
  render: function () {
    var movie = this.props.movie;

    return (
      <li className="list-group-item">
        <h4 className="list-group-item-heading">
          {movie.get('name')}
        </h4>
        <p className="list-group-item-text">
          {moment(movie.get('released_at')).year()}
          <Rating rating={movie.rating()} movie_id={movie.id} />
        </p>
      </li>
    );
  }
});

var Rating = App.Views.Rating = React.createClass({
  getInitialState: function() {
    this.rating = this.props.rating;
    return { rating: this.rating.get('rating'), movie_id: this.props.movie_id };
  },

  render: function () {
    return (
      <input type="number" value={this.state.rating} data-movie-id={this.state.movie_id} className="rating"></input>
    );
  },
});

var MovieList = App.Views.MovieIndex = React.createClass({
  componentDidMount: function () {
    $('.rating').rating();
    $('ul').on('change', '.rating', function (event) {
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
        <ul className="list-group">
          {movies.map(function (movie) {
            return <MovieListItem movie={movie} />;
          })}
        </ul>
      </div>
    );
  }
});

App.movies = new App.Collections.Movies();

App.movies.fetch().then(function () {
  React.renderComponent(
    <MovieList movies={App.movies}/>, 
    document.getElementById("movie-list")
  );
});
