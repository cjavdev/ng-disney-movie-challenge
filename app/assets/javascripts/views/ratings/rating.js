/*globals App, React */
"use strict";

var Rating = React.createClass({
  getInitialState: function() {
    this.rating = this.props.rating;
    var value = this.rating.get('rating');
    return { rating: value, movie_id: this.props.movie.id };
  },

  render: function () {
    return (
      <input type="number" data-max="5" data-min="1" value={this.state.rating} data-movie-id={this.state.movie_id} className="rating pull-right"></input>
    );
  },
});
