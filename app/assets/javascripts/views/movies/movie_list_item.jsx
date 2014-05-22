/** @jsx React.DOM */
/*globals App, React */
"use strict";

var MovieListItem = App.Views.MovieListItem = React.createClass({
  handleClick: function () {
    console.log(this.props);
    React.renderComponent(
      <MovieDetail movie={this.props.movie} />,
      document.getElementById('movie-detail')
    );
  },

  render: function () {
    var movie = this.props.movie;

    return (
      <a onClick={this.handleClick} className="list-group-item">
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

