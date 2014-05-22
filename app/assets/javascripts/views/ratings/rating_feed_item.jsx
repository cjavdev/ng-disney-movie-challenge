/** @jsx React.DOM */
/*globals App, React */
"use strict";

var RatingListItem = React.createClass({
  render: function () {
    var rating = this.props.rating;
    return (
      <a className="list-group-item">
        <UserImage user={rating.user()} />
        {rating.user().get('name')} watched {rating.get('movie_name')}
      </a>
    );
  }
});
