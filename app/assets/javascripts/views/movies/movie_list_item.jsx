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
        </p>
      </li>
    );
  }
});

var MovieList = App.Views.MovieIndex = React.createClass({
  render: function () {
    var movie = this.props.movies.first();
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

var movies = new App.Collections.Movies();

movies.fetch().then(function () {
  React.renderComponent(<MovieList movies={movies}/>, document.getElementById("movie-list"));
});
