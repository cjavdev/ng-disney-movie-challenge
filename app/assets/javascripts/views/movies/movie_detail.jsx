/** @jsx React.DOM */
/*globals App, React */
"use strict";

var MovieDetail = React.createClass({
  render: function () {
    return (
      <div>
        <h2>{this.props.movie.get('name')}</h2>
        <p><strong>Duration:</strong> {this.props.movie.get('duration')} min</p>
        <p><strong>Released:</strong> {moment(this.props.movie.get('released_at')).fromNow()}</p>
        <p><strong>Average Rating:</strong> {this.props.movie.get('avg_rating')}</p>
        <p>
          <strong>IMDB:</strong>
          <a href={this.props.movie.get('imdb_link')}>
          {this.props.movie.get('imdb_link')}</a>
        </p>
      </div>
    );
  },
});
