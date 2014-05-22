/*globals App, React */
'use strict';

App.Views.RatingFeedItem = Backbone.View.extend({
  template: JST['ratings/feed_item'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});

// var RatingListItem = React.createClass({
//   handleMovieClick: function () {
//     console.log(event.currentTarget);
//     console.log(this.props);
//     Backbone.history.navigate('#' + this.props.rating.get('movie_id'), { trigger: true });
//   },
//   render: function () {
//     var rating = this.props.rating;
//     return (
//       <a className="list-group-item">
//         <UserImage user={rating.user()} />
//         {rating.user().get('name')} watched
//         <a onClick={this.handleMovieClick}>{rating.get('movie_name')}</a>
//       </a>
//     );
//   }
// });
