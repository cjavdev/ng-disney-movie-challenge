/*globals App, Backbone, JST */
'use strict';

App.Views.RatingFeed = Backbone.View.extend({
  template: JST['ratings/feed'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});

// var RatingFeed = React.createClass({
//   componentDidMount: function () {
//     // $('.list-group').on('change', '.rating', function (event) {
//     //   var newRating = event.currentTarget.value,
//     //     movieId = $(event.currentTarget).data('movie-id');
//     //
//     //   var movie = App.movies.get(movieId);
//     //   movie.rating().save({ rating: newRating });
//     // });
//   },
//
//   render: function () {
//     var ratings = this.props.ratings;
//     return (
//       <div className="ratings">
//         <div className="list-group">
//           {ratings.map(function (rating) {
//             return <RatingListItem rating={rating} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// });
