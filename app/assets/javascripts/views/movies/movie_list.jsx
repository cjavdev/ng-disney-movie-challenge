/** @jsx React.DOM */
/*globals App, React */
"use strict";

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
