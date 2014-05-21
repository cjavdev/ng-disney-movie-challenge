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

var UserImage = React.createClass({
  render: function () {
    var user = this.props.user;
    return (
      <img src={user.get('image')} />
    );
  },
})

var RatingFeed = React.createClass({
  componentDidMount: function () {
    // $('.list-group').on('change', '.rating', function (event) {
    //   var newRating = event.currentTarget.value,
    //     movieId = $(event.currentTarget).data('movie-id');
    //
    //   var movie = App.movies.get(movieId);
    //   movie.rating().save({ rating: newRating });
    // });
  },

  render: function () {
    var ratings = this.props.ratings;
    return (
      <div className="ratings">
        <div className="list-group">
          {ratings.map(function (rating) {
            return <RatingListItem rating={rating} />;
          })}
        </div>
      </div>
    );
  }
});
