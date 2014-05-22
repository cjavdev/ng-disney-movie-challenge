/** @jsx React.DOM */
/*globals App, React */
"use strict";

var RatingListItem = React.createClass({
  handleMovieClick: function () {
    console.log(event.currentTarget);
    console.log(this.props);
    Backbone.history.navigate('#' + this.props.rating.get('movie_id'), { trigger: true });
  },
  render: function () {
    var rating = this.props.rating;
    return (
      <a className="list-group-item">
        <UserImage user={rating.user()} />
        {rating.user().get('name')} watched 
        <a onClick={this.handleMovieClick}>{rating.get('movie_name')}</a>
      </a>
    );
  }
});
